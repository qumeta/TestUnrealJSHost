// Copyright 1998-2018 Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "Framework/Commands/Commands.h"
#include "JsRuntimeHostEditorStyle.h"

class FJsRuntimeHostEditorCommands : public TCommands<FJsRuntimeHostEditorCommands>
{
public:

	FJsRuntimeHostEditorCommands()
		: TCommands<FJsRuntimeHostEditorCommands>(TEXT("JsRuntimeHostEditor"), NSLOCTEXT("Contexts", "JsRuntimeHostEditor", "JsRuntimeHostEditor Plugin"), NAME_None, FJsRuntimeHostEditorStyle::GetStyleSetName())
	{
	}

	// TCommands<> interface
	virtual void RegisterCommands() override;

public:
	TSharedPtr< FUICommandInfo > PluginAction;
};
