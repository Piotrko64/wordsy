import { render, fireEvent, screen, waitFor } from "@testing-library/vue";
import { test, expect, describe } from "vitest";
import BaseInput from "../BaseInput.vue";

describe("testing baseInput component", () => {
    const component = render(BaseInput, { props: { title: "example", name: "example" } });
    test("increments value on click", async () => {
        expect(component.getByTestId("label").textContent).toBe("example");
    });

    test("check input value", async () => {
        const input = component.getByLabelText("example") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "23" } });

        expect(input.value).toBe("23");
    });
});
