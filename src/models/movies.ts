import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import type { AppRouter } from "~/server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allMoviesOutput = RouterOutputs['movies']['all'];

export type Movie = allMoviesOutput[number]; 

export const movieInput = z.object({
    name: z.string(),
    releaseDate: z.string(),
    ratings: z.number(),
    totalRatings: z.number()
})