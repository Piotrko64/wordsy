import { render, fireEvent, getByTestId, getByText, queryByText } from "@testing-library/vue";
import { test, expect, describe } from "vitest";
import BaseInput from "../BaseInput.vue";

describe("testing baseInput component", () => {
    test("increments value on click", async () => {
        const { getByTestId } = render(BaseInput, { props: { title: "example", name: "example" } });

        expect(getByTestId("label").textContent).toBe("example");
    });

    test("check input value", async () => {
        const component = render(BaseInput, { props: { title: "example" } });
        const input = component.getByLabelText("example") as HTMLInputElement;

        fireEvent.change(input, { target: { value: "23" } });

        expect(input.value).toBe("23");
    });
});
