import test from "@playwright/test";

const TIMEOUT = 3000; // 3 secondes pour simuler un test

test.describe.configure({ mode: "default" });

test.beforeAll(async () => {
    console.log("[beforeAll]");
});

test("Test 1", async () => {
    console.log("[START] Test 1");
    await new Promise(resolve => setTimeout(resolve, TIMEOUT));
    console.log("[END] Test 1");
});

test("Test 2", async () => {
    console.log("[START] Test 2");
    await new Promise(resolve => setTimeout(resolve, TIMEOUT));
    console.log("[END] Test 2");
});
