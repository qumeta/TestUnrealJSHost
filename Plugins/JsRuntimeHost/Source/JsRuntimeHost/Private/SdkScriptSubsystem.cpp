// Fill out your copyright notice in the Description page of Project Settings.


#include "SdkScriptSubsystem.h"

#include "Interfaces/IPluginManager.h"

#include "SdkDefines.h" // for log

#include <Babylon/AppRuntime.h>
#include <Babylon/ScriptLoader.h>
#include <Babylon/Polyfills/Scheduling.h>
#include <Babylon/Polyfills/XMLHttpRequest.h>
#include <Babylon/Polyfills/URL.h>
#include <Babylon/Polyfills/AbortController.h>
#include <Babylon/Polyfills/WebSocket.h>
#include <future>

USdkScriptSubsystem::USdkScriptSubsystem()
	: UGameInstanceSubsystem()
{
	
}

void USdkScriptSubsystem::Initialize(FSubsystemCollectionBase& Collection)
{
	Super::Initialize(Collection);

	UE_LOG(LogMMSdk, Log, TEXT("Initialize"));
}

void USdkScriptSubsystem::Deinitialize()
{
	// Do nothing for now
	Super::Deinitialize();

	UE_LOG(LogMMSdk, Log, TEXT("Deinitialize"));
}

void USdkScriptSubsystem::Demo()
{
	//Babylon::AppRuntime runtime{};

	AsyncTask(ENamedThreads::AnyThread, [this]
	{
		auto Ret = RunTests([this](const char* message, Babylon::Polyfills::Console::LogLevel logLevel)
		{
			FString msg = FString(UTF8_TO_TCHAR(message));
			//UE_LOG(LogMMSdk, Log, TEXT("Consoles:%s"), *msg);

			UE_LOG(LogMMSdk, Log, TEXT("[%s] %s"), *EnumToString(logLevel), *msg);
		});

		UE_LOG(LogMMSdk, Log, TEXT("RunTests=[%d]"), Ret);
	});	
}


FString USdkScriptSubsystem::EnumToString(Babylon::Polyfills::Console::LogLevel logLevel)
{
	switch (logLevel)
	{
	case Babylon::Polyfills::Console::LogLevel::Log:
		return FString("log");
	case Babylon::Polyfills::Console::LogLevel::Warn:
		return FString("warn");
	case Babylon::Polyfills::Console::LogLevel::Error:
		return FString("error");
	}

	return FString("unknown");
}

int USdkScriptSubsystem::RunTests(Babylon::Polyfills::Console::CallbackT consoleCallback)
{
	UE_LOG(LogMMSdk, Log, TEXT("RunTests"));

	std::promise<int32_t> exitCode;
	TPromise<bool> Promise;
	TFuture<bool> Future = Promise.GetFuture();

	Babylon::AppRuntime runtime{};
	
	runtime.Dispatch([&exitCode, &Promise, consoleCallback = std::move(consoleCallback)](Napi::Env env) mutable
	{
		Babylon::Polyfills::XMLHttpRequest::Initialize(env);
		Babylon::Polyfills::Console::Initialize(env, std::move(consoleCallback));
		Babylon::Polyfills::Scheduling::Initialize(env);
		Babylon::Polyfills::URL::Initialize(env);
		Babylon::Polyfills::AbortController::Initialize(env);
		Babylon::Polyfills::WebSocket::Initialize(env);

		env.Global().Set("SetExitCode", Napi::Function::New(env, [&exitCode, &Promise](const Napi::CallbackInfo& info)
		{
			Napi::Env env = info.Env();
			auto Value = info[0].As<Napi::Number>().Int32Value();
			UE_LOG(LogMMSdk, Log, TEXT("Value %d"), Value);

			Promise.SetValue(true);

		}, "SetExitCode"));

		env.Global().Set("hostPlatform", Napi::Value::From(env, JSRUNTIMEHOST_PLATFORM));
	});

	Babylon::ScriptLoader loader{runtime};

	// Common
	{
		FString MainJS = TEXT("Demo/Main.js");
		FString DemoJsDir = FPaths::ProjectContentDir() / MainJS;

		if (FPaths::FileExists(DemoJsDir))
		{
			TArray<uint8> JsData;
			FFileHelper::LoadFileToArray(JsData, *DemoJsDir, 0);

			FString JsSaveDir = FPaths::ProjectSavedDir() + MainJS;
			FFileHelper::SaveArrayToFile(JsData, *JsSaveDir);

			UE_LOG(LogMMSdk, Log, TEXT("JsSaveDir %s"), *JsSaveDir);

			// Eval
			FString FileContent;
			FFileHelper::LoadFileToString(FileContent, *JsSaveDir);

			//UE_LOG(LogMMSdk, Log, TEXT("FileContent %s"), *FileContent);

			loader.Eval(TCHAR_TO_UTF8(*FileContent), TCHAR_TO_UTF8(*JsSaveDir));
		}
		else
		{
			UE_LOG(LogMMSdk, Log, TEXT("DemoJsDir not exists %s"), *DemoJsDir);
		}
	}


	Future.WaitFor(FTimespan::FromSeconds(5));
	// Future.WaitUntil(FDateTime(2022, 1, 1));

	if (Future.IsReady())
	{
		UE_LOG(LogTemp, Display, TEXT("keep the promise, future is %d"), Future.Get());
	}
	else
	{
		Promise.SetValue(false);
		UE_LOG(LogTemp, Display, TEXT("break the promise"));
	}

	return Future.Get() ? 0 : 1;
}