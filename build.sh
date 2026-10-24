#!/usr/bin/env bash
set -e

# Script para compilar el paquete .ipk de TV Chile para LG webOS
echo "📦 Compilando paquete TVChile.ipk para LG webOS..."
npx @webos-tools/cli ares-package . -o .

# Renombrar al nombre estándar
if ls org.tvchile.app_*.ipk 1> /dev/null 2>&1; then
    cp org.tvchile.app_*.ipk TVChile.ipk
    echo "✅ Paquete generado exitosamente: TVChile.ipk"
fi
