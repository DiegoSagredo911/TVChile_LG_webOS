/**
 * tizen-keys.js
 * Compatible con:
 * - LG webOS TV (LH6000 y modernos webOS 1.0 - 24+)
 * - Samsung Smart TV (Orsay 2010-2014 y Tizen 2015+)
 * 100% ECMAScript 5 (ES5) puro
 */

(function () {
    'use strict';

    var widgetAPI = null;
    var tvKey = null;
    var pluginAPI = null;

    // Intentar inicializar Samsung Common API (Modelos 2010-2014 Orsay)
    try {
        if (typeof Common !== 'undefined' && Common.API) {
            if (Common.API.Widget) widgetAPI = new Common.API.Widget();
            if (Common.API.TVKeyValue) tvKey = new Common.API.TVKeyValue();
            if (Common.API.Plugin) pluginAPI = new Common.API.Plugin();
        }
    } catch (e) {}

    // Intentar registrar teclas en Tizen OS (Modelos 2015+)
    try {
        if (typeof tizen !== 'undefined' && tizen.tvinputdevice) {
            var tizenKeys = [
                'ChannelUp', 'ChannelDown',
                'MediaPlay', 'MediaPause', 'MediaPlayPause', 'MediaStop',
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
            ];
            for (var i = 0; i < tizenKeys.length; i++) {
                try {
                    tizen.tvinputdevice.registerKey(tizenKeys[i]);
                } catch (err) {}
            }
        }
    } catch (e) {}

    // Mapeo unificado compatible con LG webOS y Samsung
    var TV_KEYS = {
        isUp: function (c, e) {
            return c === 38 || (tvKey && c === tvKey.KEY_UP) || c === 29460 || (e && e.key === 'ArrowUp');
        },
        isDown: function (c, e) {
            return c === 40 || (tvKey && c === tvKey.KEY_DOWN) || c === 29461 || (e && e.key === 'ArrowDown');
        },
        isLeft: function (c, e) {
            return c === 37 || (tvKey && c === tvKey.KEY_LEFT) || c === 4 || (e && e.key === 'ArrowLeft');
        },
        isRight: function (c, e) {
            return c === 39 || (tvKey && c === tvKey.KEY_RIGHT) || c === 5 || (e && e.key === 'ArrowRight');
        },
        isEnter: function (c, e) {
            return c === 13 || (tvKey && c === tvKey.KEY_ENTER) || c === 29443 || (e && (e.key === 'Enter' || e.key === 'Ok'));
        },
        isReturn: function (c, e) {
            return c === 461 || c === 10009 || c === 27 || c === 8 || (tvKey && (c === tvKey.KEY_RETURN || c === tvKey.KEY_EXIT)) || c === 88 || (e && (e.key === 'Back' || e.key === 'Escape'));
        },
        isChUp: function (c, e) {
            // 402 = LG webOS ChannelUp | 427/33 = Samsung/Standard PageUp | 68 = D
            return c === 402 || c === 427 || c === 33 || (tvKey && c === tvKey.KEY_CH_UP) || c === 68 || (e && e.key === 'ChannelUp');
        },
        isChDown: function (c, e) {
            // 403 = LG webOS ChannelDown | 428/34 = Samsung/Standard PageDown | 65 = A
            return c === 403 || c === 428 || c === 34 || (tvKey && c === tvKey.KEY_CH_DOWN) || c === 65 || (e && e.key === 'ChannelDown');
        },
        isPlayPause: function (c, e) {
            return c === 415 || c === 19 || c === 10252 || (tvKey && (c === tvKey.KEY_PLAY || c === tvKey.KEY_PAUSE)) || (e && (e.key === 'MediaPlayPause' || e.key === 'Play'));
        },
        getNumber: function (c, e) {
            // Teclado numérico estándar DOM (48-57 -> 0-9)
            if (c >= 48 && c <= 57) {
                return c - 48;
            }
            // Teclado Numpad (96-105 -> 0-9)
            if (c >= 96 && c <= 105) {
                return c - 96;
            }
            // Por e.key si el navegador lo provee
            if (e && e.key && e.key.length === 1 && e.key >= '0' && e.key <= '9') {
                return parseInt(e.key, 10);
            }
            // Samsung Orsay TVKeyValue (2010-2014)
            if (tvKey) {
                if (c === tvKey.KEY_0 || c === 17) return 0;
                if (c === tvKey.KEY_1 || c === 101) return 1;
                if (c === tvKey.KEY_2 || c === 98) return 2;
                if (c === tvKey.KEY_3 || c === 6) return 3;
                if (c === tvKey.KEY_4 || c === 8) return 4;
                if (c === tvKey.KEY_5 || c === 9) return 5;
                if (c === tvKey.KEY_6 || c === 10) return 6;
                if (c === tvKey.KEY_7 || c === 12) return 7;
                if (c === tvKey.KEY_8 || c === 13) return 8;
                if (c === tvKey.KEY_9 || c === 14) return 9;
            }
            return -1;
        }
    };

    window.TV_KEYS = TV_KEYS;
    window.widgetAPI = widgetAPI;
    window.tvKey = tvKey;
    window.pluginAPI = pluginAPI;
})();
