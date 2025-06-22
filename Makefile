ifeq ($(SIMULATOR),1)
	ARCHS = arm64 x86_64
	TARGET = simulator:clang:latest:14.0
else
	ifeq ($(THEOS_PACKAGE_SCHEME),rootless)
		TARGET = iphone:clang:latest:15.0
		ARCHS = arm64 arm64e
	else
		TARGET = iphone:clang:14.5:8.0
		ARCHS = armv7 arm64 arm64e
		export PREFIX = $(THEOS)/toolchain/Xcode11.xctoolchain/usr/bin/
	endif
endif

INSTALL_TARGET_PROCESSES = MobileSafari SafariViewService com.apple.WebKit.WebContent

include $(THEOS)/makefiles/common.mk

TWEAK_NAME = GitHubWebLegacyCompat

$(TWEAK_NAME)_FILES = Tweak.x
$(TWEAK_NAME)_CFLAGS = -fobjc-arc

JS_PATH = layout/Library/Application Support/$(TWEAK_NAME)

js:
	@for file in scripts/*.js; do \
		base=$$(basename "$$file" .js); \
		npx babel "$$file" --out-file "$(JS_PATH)/$$base.babel.js"; \
		npx uglifyjs "$(JS_PATH)/$$base.babel.js" -o "$(JS_PATH)/$$base.min.js"; \
		rm "$(JS_PATH)/$$base.babel.js"; \
	done

include $(THEOS_MAKE_PATH)/tweak.mk
ifeq ($(SIMULATOR),1)
setup:: clean all
	@rm -f /opt/simject/$(TWEAK_NAME).dylib
	@cp -v $(THEOS_OBJ_DIR)/$(TWEAK_NAME).dylib /opt/simject/$(TWEAK_NAME).dylib
	@cp -v $(PWD)/$(TWEAK_NAME).plist /opt/simject/$(TWEAK_NAME).plist
endif
