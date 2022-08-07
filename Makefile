.PHONY: generate serve

BLOG_GENERATOR=blog-generator

generate:
	cd ${BLOG_GENERATOR} && make generate

serve:
	cd ${BLOG_GENERATOR} && make serve
