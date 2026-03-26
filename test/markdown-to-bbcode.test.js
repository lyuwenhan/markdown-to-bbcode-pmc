import assert from "node:assert/strict";
import test from "node:test";
import { markdownToBBCode } from "../index.js";

test("converts heading and bold", () => {
	const out = markdownToBBCode("# Title\n\n**bold**");
	assert.ok(out.includes("[h1]Title[/h1]"));
	assert.ok(out.includes("[b]bold[/b]"));
});

test("throws TypeError for non-string", () => {
	assert.throws(() => markdownToBBCode(null), TypeError);
});
