BIN = ./node_modules/.bin
PATH := $(BIN):$(PATH)

install:
	npm $@

start:
	@ node server.js

.PHONY: install start
