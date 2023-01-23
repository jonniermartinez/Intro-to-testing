import { act, renderHook } from '@testing-library/react';
import { useCounter } from './useCounter';
import { describe, expect, it} from 'vitest';

describe("useCounter Hook", () => {
    it('Should increment the count', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });
    it('Should decrement the count', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(-1);
    });
})