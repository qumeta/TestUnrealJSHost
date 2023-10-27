// Copyright Epic Games, Inc. All Rights Reserved.

#include "JsRuntimeHost.h"
#include "Core.h"
#include "Modules/ModuleManager.h"
#include "Interfaces/IPluginManager.h"

#include "SdkDefines.h"

#define LOCTEXT_NAMESPACE "FJsRuntimeHostModule"

void FJsRuntimeHostModule::StartupModule()
{
	UE_LOG(LogMMSdk, Log, TEXT("FMMSDKModule::StartupModule"));

	// Get the base directory of this plugin
	FString BaseDir = IPluginManager::Get().FindPlugin("JsRuntimeHost")->GetBaseDir();
}

void FJsRuntimeHostModule::ShutdownModule()
{
	UE_LOG(LogMMSdk, Log, TEXT("FMMSDKModule::ShutdownModule"));
}

#undef LOCTEXT_NAMESPACE
	
IMPLEMENT_MODULE(FJsRuntimeHostModule, JsRuntimeHost)

DEFINE_LOG_CATEGORY(LogMMSdk);