// Copyright 1998-2018 Epic Games, Inc. All Rights Reserved.

#include "JsRuntimeHostEditor.h"
#include "JsRuntimeHostEditorStyle.h"
#include "JsRuntimeHostEditorCommands.h"

// engine header
#include "Misc/MessageDialog.h"
#include "Framework/MultiBox/MultiBoxBuilder.h"
#include "LevelEditor.h"
#include "HAL/FileManager.h"
#include "Interfaces/IPluginManager.h"
#include "IPlatformFilePak.h"

// #include <synchapi.h>

static const FName JsRuntimeHostEditorTabName("JsRuntimeHostEditor");

#define LOCTEXT_NAMESPACE "FJsRuntimeHostEditorModule"

void FJsRuntimeHostEditorModule::StartupModule()
{
	// This code will execute after your module is loaded into memory; the exact timing is specified in the .uplugin file per-module
	
	FJsRuntimeHostEditorStyle::Initialize();
	FJsRuntimeHostEditorStyle::ReloadTextures();

	FJsRuntimeHostEditorCommands::Register();
	
	PluginCommands = MakeShareable(new FUICommandList);

	PluginCommands->MapAction(
		FJsRuntimeHostEditorCommands::Get().PluginAction,
		FExecuteAction::CreateRaw(this, &FJsRuntimeHostEditorModule::PluginButtonClicked),
		FCanExecuteAction());
		
	FLevelEditorModule& LevelEditorModule = FModuleManager::LoadModuleChecked<FLevelEditorModule>("LevelEditor");
	
	{
		TSharedPtr<FExtender> MenuExtender = MakeShareable(new FExtender());
		MenuExtender->AddMenuExtension("WindowLayout", EExtensionHook::After, PluginCommands, FMenuExtensionDelegate::CreateRaw(this, &FJsRuntimeHostEditorModule::AddMenuExtension));

		LevelEditorModule.GetMenuExtensibilityManager()->AddExtender(MenuExtender);
	}
	
	{
		TSharedPtr<FExtender> ToolbarExtender = MakeShareable(new FExtender);
		ToolbarExtender->AddToolBarExtension("Settings", EExtensionHook::After, PluginCommands, FToolBarExtensionDelegate::CreateRaw(this, &FJsRuntimeHostEditorModule::AddToolbarExtension));
		
		LevelEditorModule.GetToolBarExtensibilityManager()->AddExtender(ToolbarExtender);
	}
}

void FJsRuntimeHostEditorModule::ShutdownModule()
{
	// This function may be called during shutdown to clean up your module.  For modules that support dynamic reloading,
	// we call this function before unloading the module.
	FJsRuntimeHostEditorStyle::Shutdown();



	FJsRuntimeHostEditorCommands::Unregister();
}

void FJsRuntimeHostEditorModule::PluginButtonClicked()
{
	IFileManager::Get().Copy(*FPaths::Combine(FPaths::ProjectContentDir(), TEXT("Demo/Main.js")),
		*FPaths::Combine(FPaths::ProjectDir(), TEXT("../MMSdkTS/dist/Main.js")));

	//C:\Item\Github\MMSdk\MMSdkTS\dist
	FString SDKJsFromPath = FPaths::Combine(FPaths::ProjectDir(), TEXT("../MMSdkTS/dist/Main.js"));
	TArray<FString> AllFiles;
	IFileManager::Get().FindFilesRecursive(AllFiles, *SDKJsFromPath, TEXT("*.js"), true, false, true);

	for (const auto& File : AllFiles) 
	{
		FString NewFile = File;
		//IFileManager::Get().Move(*NewFile, *File);
	}
}

void FJsRuntimeHostEditorModule::AddMenuExtension(FMenuBuilder& Builder)
{
	Builder.AddMenuEntry(FJsRuntimeHostEditorCommands::Get().PluginAction);
}

void FJsRuntimeHostEditorModule::AddToolbarExtension(FToolBarBuilder& Builder)
{
	Builder.AddToolBarButton(FJsRuntimeHostEditorCommands::Get().PluginAction);
}


#undef LOCTEXT_NAMESPACE
	
IMPLEMENT_MODULE(FJsRuntimeHostEditorModule, JsRuntimeHostEditor)