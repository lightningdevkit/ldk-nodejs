merge-include-files:
	cd include && cat rust_types.h lightning.h > combined_header_file.h

gen-interface-mac:
	export CPATH=`xcrun --show-sdk-path`/usr/include && cd src/ldk/ && ../../node_modules/ffi-generate/bin/ffi-generate.js -L /Library/Developer/CommandLineTools/usr/lib -x -f ../../include/combined_header_file.h -l ../../lib/liblightning > ./ffi.js

sanitize-ffi:
	node ./src/bin/sanitize_ffi.js
