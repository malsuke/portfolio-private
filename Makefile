SHELL=/bin/bash

.PHONY: init
init:
  bun i
	cd docs/openapi && make codegen
	bun run dev

.PHONY: codegen
codegen:
	cd docs/openapi && make codegen
