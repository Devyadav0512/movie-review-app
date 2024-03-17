import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import type { AppRouter } from "~/server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allMoviesOutput = RouterOutputs['reviews']['all'];

export type Review = allMoviesOutput[number]; 

export const reviewInput = z.object({
    movieId: z.string(),
    reviewerName: z.string(),
    comments: z.string(),
    ratings: z.number()
})