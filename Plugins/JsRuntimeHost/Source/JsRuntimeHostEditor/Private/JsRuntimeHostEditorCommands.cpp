// Copyright 1998-2018 Epic Games, Inc. All Rights Reserved.

#include "JsRuntimeHostEditorCommands.h"

#define LOCTEXT_NAMESPACE "FJsRuntimeHostEditorModule"

void FJsRuntimeHostEditorCommands::RegisterCommands()
{
	UI_COMMAND(PluginAction, "JSHost", "Execute JSHost action(Copy JS File)", EUserInterfaceActionType::Button, FInputGesture());
}

#undef LOCTEXT_NAMESPACE
