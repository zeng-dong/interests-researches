/**
 create a Rock Paper Scissors game where the player inputs their choice and plays
 against a computer that randomly selects its move, with the game showing who won each
 round. Add a score counter that tracks player and computer winds, and allow the game to 
 continue until player types 'quit'
 */

import readline from "readline";

type Move = "rock" | "paper" | "scissors";

const validMoves: Record<string, Move | "quit" | null> = {
    rock: "rock",
    r: "rock",
    paper: "paper",
    p: "paper",
    scissors: "scissors",
    s: "scissors",
    quit: "quit",
    q: "quit",
};

function normalizeInput(input: string): Move | "quit" | null {
    const key = input.trim().toLowerCase();
    return (validMoves as any)[key] ?? null;
}

function randomMove(): Move {
    const moves: Move[] = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function decideWinner(
    player: Move,
    computer: Move
): "player" | "computer" | "tie" {
    if (player === computer) return "tie";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }
    return "computer";
}

async function interactivePlay() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (prompt: string) =>
        new Promise<string>((resolve) =>
            rl.question(prompt, (ans) => resolve(ans))
        );

    console.log(
        "Rock Paper Scissors — type 'rock', 'paper', or 'scissors' (or r/p/s). Type 'quit' to exit."
    );

    let playerScore = 0;
    let computerScore = 0;

    while (true) {
        const ans = await question("Your move: ");
        const norm = normalizeInput(ans);
        if (norm === "quit") break;
        if (!norm) {
            console.log(
                "Invalid input — please type rock, paper, scissors, or quit."
            );
            continue;
        }

        const computer = randomMove();
        const winner = decideWinner(norm, computer);

        if (winner === "player") {
            playerScore++;
            console.log(
                `You chose ${norm}, computer chose ${computer} — You win this round!`
            );
        } else if (winner === "computer") {
            computerScore++;
            console.log(
                `You chose ${norm}, computer chose ${computer} — Computer wins this round.`
            );
        } else {
            console.log(
                `You chose ${norm}, computer chose ${computer} — It's a tie.`
            );
        }

        console.log(`Score — You: ${playerScore}  Computer: ${computerScore}`);
    }

    console.log("\nGame over. Final score:");
    console.log(`You: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    if (playerScore > computerScore) console.log("Overall winner: You 🎉");
    else if (computerScore > playerScore)
        console.log("Overall winner: Computer 🤖");
    else console.log("Overall result: Tie");

    rl.close();
}

async function demoPlay(rounds = 5) {
    console.log(`Demo mode — simulating ${rounds} rounds`);
    let playerScore = 0;
    let computerScore = 0;

    const choices: Move[] = ["rock", "paper", "scissors"];

    for (let i = 0; i < rounds; i++) {
        const player = choices[Math.floor(Math.random() * choices.length)];
        const computer = randomMove();
        const winner = decideWinner(player, computer);

        if (winner === "player") playerScore++;
        else if (winner === "computer") computerScore++;

        console.log(
            `Round ${i + 1}: you=${player}, computer=${computer} -> ${winner}`
        );
    }

    console.log("\nDemo finished. Scores:");
    console.log(`You: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

async function main() {
    const args = process.argv.slice(2);
    if (args.includes("--demo")) {
        await demoPlay(5);
        return;
    }

    await interactivePlay();
}

if (require.main === module) {
    main().catch((err) => {
        console.error("Unexpected error:", err);
        process.exit(1);
    });
}
