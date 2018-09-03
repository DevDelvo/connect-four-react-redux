export const DROP_CHECKER = 'DROP_CHECKER';
export const RESET_GAME = 'RESET_GAME';

export const dropChecker = col => ({
    type: DROP_CHECKER,
    payload: col
});

export const resetGame = () => ({
    type: RESET_GAME,
})

