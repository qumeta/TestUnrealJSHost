// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Subsystems/GameInstanceSubsystem.h"

#include <Babylon/Polyfills/Console.h>

#include "SdkScriptSubsystem.generated.h"


/**
 * 
 */
UCLASS()
class JSRUNTIMEHOST_API USdkScriptSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()

public:
	USdkScriptSubsystem();

	// Begin USubsystem
	virtual void Initialize(FSubsystemCollectionBase& Collection) override;
	virtual void Deinitialize() override;
	// End USubsystem

public:
	UFUNCTION(BlueprintCallable, Category = "MMSdk | Demo")
	void Demo();


	int RunTests(Babylon::Polyfills::Console::CallbackT consoleCallback);

private:
	FString EnumToString(Babylon::Polyfills::Console::LogLevel logLevel);
};
