merge-include-files:
	pushd include && cat rust_types.h lightning.h > combined_header_file.h && popd

sanitize-include-file:
	node ./src/bin/sanitize_include_file.js

prep-include-files:
	make merge-include-files && make sanitize-include-file

gen-interface-mac:
	export CPATH=`xcrun --show-sdk-path`/usr/include && cd src/ldk/ && ../../node_modules/ffi-generate/bin/ffi-generate.js -L /Library/Developer/CommandLineTools/usr/lib -x -f ../../include/combined_header_file.h -l ../../lib/libldk > ./ffi.js

sanitize-ffi:
	node ./src/bin/sanitize_ffi.js
