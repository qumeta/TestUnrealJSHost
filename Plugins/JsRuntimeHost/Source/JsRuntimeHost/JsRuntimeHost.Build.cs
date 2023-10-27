// Copyright Epic Games, Inc. All Rights Reserved.

using System.Collections.Generic;
using System.IO;
using UnrealBuildTool;
using EpicGames.Core;

public class JsRuntimeHost : ModuleRules
{
    protected virtual string RootDirectory { get { return ModuleDirectory; } }

    protected virtual string IncPath { get { return Path.Combine(RootDirectory, "..", "..", "ThirdParty", "include"); } }
    protected virtual string LibPath { get { return Path.Combine(RootDirectory, "..", "..", "ThirdParty", "lib"); } }
    protected virtual string V8Path { get { return Path.Combine(RootDirectory, "..", "..", "ThirdParty", "v8"); } }

    public JsRuntimeHost(ReadOnlyTargetRules Target) : base(Target)
	{
        //Log.TraceWarningOnce($"****{IncPath}****");

        PCHUsage = ModuleRules.PCHUsageMode.UseExplicitOrSharedPCHs;

        bEnableExceptions = true;

        PublicDefinitions.Add("NODE_ADDON_API_DISABLE_DEPRECATED");
        PublicDefinitions.Add("NODE_ADDON_API_DISABLE_NODE_SPECIFIC");

        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API/Include/Shared"));
        //PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API/Include/Engine/V8"));
        //PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API-JSI/Include"));

        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "ScriptLoader", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "JsRuntime", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "AppRuntime", "Include"));

        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Polyfills", "Console", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Polyfills", "AbortController", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Polyfills", "Scheduling", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Polyfills", "URL", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Polyfills", "WebSocket", "Include"));
        PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Polyfills", "XMLHttpRequest", "Include"));

        if (Target.Platform == UnrealTargetPlatform.Win64)
        {
            PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API/Include/Engine/V8"));

            PublicSystemIncludePaths.Add(Path.Combine(V8Path, "v8_bin_9.4.146.24", "Inc"));

            PublicDefinitions.Add("JSRUNTIMEHOST_PLATFORM=\"Win32\"");
            //PublicDefinitions.Add("NAPI_CPP_EXCEPTIONS");
            //PublicDefinitions.Add("NAPI_DISABLE_CPP_EXCEPTIONS");

            //PublicDefinitions.Add("V8_COMPRESS_POINTERS");
            //PublicDefinitions.Add("V8_ENABLE_ETW_STACK_WALKING");

            // Pathcch.lib
            PublicSystemLibraries.Add("Pathcch.lib");
            //PublicSystemLibraries.Add("DbgHelp.lib");

            //DirectoryReference LibraryRootDir = DirectoryReference.Combine(WindowsSdkDir, "lib", "winv6.3");
            //ibraryPaths.Add(DirectoryReference.Combine(LibraryRootDir, "um", ArchFolder));

            string WrapperLibraryPath = "RelWithDebInfo";
            //string WrapperLibraryPath = "Release";

            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "AppRuntime.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "JsRuntime.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "ScriptLoader.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "XMLHttpRequest.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "WebSocket.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "UrlLib.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "URL.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "Scheduling.lib"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "llhttp.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "Console.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "arcana.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "AbortController.lib"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "napi.lib"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "v8inspector.lib"));

            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Win64", WrapperLibraryPath, "wee8.lib"));
        }
        else if (Target.Platform == UnrealTargetPlatform.Android)
        {
            PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API/Include/Engine/V8"));

            PublicSystemIncludePaths.Add(Path.Combine(V8Path, "v8_bin_9.4.146.24", "Inc"));

            PublicDefinitions.Add("JSRUNTIMEHOST_PLATFORM=\"Android\"");
            //PublicDefinitions.Add("NAPI_CPP_EXCEPTIONS");
            //PublicDefinitions.Add("NAPI_DISABLE_CPP_EXCEPTIONS");
            PublicDefinitions.Add("V8_CC_MSVC=1");

            string Abi = "arm64-v8a";
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libAndroidExtensions.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libAppRuntime.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libJsRuntime.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libScriptLoader.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libXMLHttpRequest.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libWebSocket.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libUrlLib.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libURL.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libScheduling.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libllhttp.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libConsole.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libarcana.a")); // TODO
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libAbortController.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libnapi.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libv8inspector.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibPath, "Android", Abi, "libwee8.a"));

            //RuntimeDependencies.Add(Path.Combine("$(BinaryOutputDir)", "libv8android.so"), FullDynamicLibName, StagedFileType.NonUFS);

            AdditionalPropertiesForReceipt.Add("AndroidPlugin", System.IO.Path.Combine(ModuleDirectory, "JsRuntimeHost_UPL_Android.xml"));
        }
        else if (Target.Platform == UnrealTargetPlatform.Mac)
        {
            PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API/Include/Engine/JavaScriptCore"));

            PublicDefinitions.Add("JSRUNTIMEHOST_PLATFORM=\"macOS\"");

            var LibraryPath = Path.Combine(LibPath, "macOS", "macOS");
#if UE_5_2_OR_LATER
            if (Target.Architecture == UnrealArch.Arm64)
            {
                LibraryPath += "_arm64";
            }
#endif
            //*
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libAppRuntime.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libJsRuntime.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libScriptLoader.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libXMLHttpRequest.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libWebSocket.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libUrlLib.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libURL.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libScheduling.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libllhttp.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libConsole.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libarcana.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libAbortController.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libnapi.a"));
            //*/

            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libwee8.a"));

            PublicFrameworks.AddRange(
                new string[] {
                    "JavaScriptCore"
                });
        }
        else if (Target.Platform == UnrealTargetPlatform.IOS)
        {
            PublicSystemIncludePaths.Add(Path.Combine(IncPath, "Core", "Node-API/Include/Engine/JavaScriptCore"));

            PublicDefinitions.Add("JSRUNTIMEHOST_PLATFORM=\"iOS\"");

            //PublicFrameworks.AddRange(new string[] { "WebKit" });
            
            var LibraryPath = Path.Combine(LibPath, "iOS", "arm64");

            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libAppRuntime.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libJsRuntime.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libScriptLoader.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libXMLHttpRequest.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libWebSocket.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libUrlLib.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libURL.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libScheduling.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libllhttp.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libConsole.a"));
            //PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libarcana.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libAbortController.a"));
            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libnapi.a"));
            //*/

            PublicAdditionalLibraries.Add(Path.Combine(LibraryPath, "libwee8.a"));

            PublicFrameworks.AddRange(
                new string[] {
                    "JavaScriptCore"
                });
        }

        PublicDependencyModuleNames.AddRange(
			new string[]
			{
				// ... add other public dependencies that you statically link with here ...
				"Core",
                "Projects",
            }
            );
			
		
		PrivateDependencyModuleNames.AddRange(
			new string[]
			{
				// ... add private dependencies that you statically link with here ...	
				"CoreUObject",
                "Engine",
            }
            );

        PublicDefinitions.Add("WITH_JSRUNTIMEHOST=1");
    }
}
