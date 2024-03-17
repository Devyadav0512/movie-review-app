import { z } from "zod";
import { reviewInput } from "~/models/reviews";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const reviewsRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const reviews  = await ctx.db.movie.findMany({
      orderBy: { createdAt: "desc" },
    });
    // return reviews.map(({reviewId, movieId, reviewerName, comments, ratings}) => ({reviewId, movieId, reviewerName, comments, ratings}))
    console.log('prisma reviews result: ',reviews)
    return [
      {
        reviewId: "1",
        movieId: "1",
        reviewerName: "Dev Yadav",
        comments: "Nice Movie",
        ratings: "10/11",
        cardType: "review",
      },
      {
        reviewId: "2",
        movieId: "2",
        reviewerName: "Dev Yadav",
        comments: "Nice Movie",
        ratings: "10/11",
        cardType: "review",
      },
      {
        reviewId: "3",
        movieId: "3",
        reviewerName: "Dev Yadav",
        comments: "Nice Movie",
        ratings: "10/11",
        cardType: "review",
      },
      {
        reviewId: "4",
        movieId: "4",
        reviewerName: "Dev Yadav",
        comments: "Nice Movie",
        ratings: "10/11",
        cardType: "review",
      },
      {
        reviewId: "5",
        movieId: "5",
        reviewerName: "Dev Yadav",
        comments: "Nice Movie",
        ratings: "10/11",
        cardType: "review",
      },
    ];
  }),

  create: publicProcedure.input(reviewInput).mutation(async ({ ctx, input }) => {
    return ctx.db.movie.create(input)
  }),

  delete: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return ctx.db.review.delete({
      where : {
        reviewId: input
      }
    })
  })
});
