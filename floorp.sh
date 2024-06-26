#!/bin/bash

# Ruta de la carpeta original
original_folder="$(pwd)/dots/.config/floorp"

# Ruta de la carpeta .floorp
floorp_folder="$HOME/.floorp"

# Encuentra el directorio default-release
default_release_dir=$(find "$floorp_folder" -type d -name "*.default-release")

if [ -n "$default_release_dir" ]; then
    # Borra la carpeta "chrome" si existe
    rm -rf "$default_release_dir/chrome"

    # Crea symlink a la carpeta "chrome"
    ln -sf "$original_folder/chrome" "$default_release_dir/chrome"
    
    # Borra el archivo "user.js" si existe
    rm -f "$default_release_dir/user.js"

    # Crea symlink al archivo "user.js"
    ln -sf "$original_folder/user.js" "$default_release_dir/user.js"

    echo "Symlinks created in $default_release_dir."
else
    echo "No se encontró el directorio default-release de floorp."
fi
