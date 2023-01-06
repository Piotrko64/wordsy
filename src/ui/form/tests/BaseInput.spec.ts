import { render, fireEvent, getByTestId } from "@testing-library/vue";
import { test, expect, describe } from "vitest";
import BaseInput from "../BaseInput.vue";

describe("testing baseInput component", () => {
    test("increments value on click", async () => {
        // The render method returns a collection of utilities to query your component.
        const { getByTestId } = render(BaseInput, { props: { title: "example", name: "example" } });

        expect(getByTestId("label").textContent).toBe("example");
    });

    test("check input value", async () => {
        // The render method returns a collection of utilities to query your component.
        const component = render(BaseInput, { props: { title: "example" } });
        const input = component.getByLabelText("example") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "23" } });

        expect(input.value).toBe("23");
    });
});
