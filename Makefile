gen-interface:
	cd src/ldk/ && ../../node_modules/ffi-generate/bin/ffi-generate.js -L /usr/local/opt/llvm/lib -x -f ../../include/joint_headers.h -l ../../lib/liblightning > ./ffi.js
