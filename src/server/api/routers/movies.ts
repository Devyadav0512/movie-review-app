import { z } from "zod";
import { movieInput } from "~/models/movies";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const moviesRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const movies  = await ctx.db.movie.findMany({
      orderBy: { createdAt: "desc" },
    });
    // return movies.map(({movieId, name, releaseDate, ratings}) => ({movieId, name, releaseDate, ratings}))
    console.log('prisma movies result: ',movies)
    return [
      {
        movieName: "Star Wars: A New Hope",
        releaseDate: "1st August, 2022",
        ratings: "9/10",
        comment: "",
        reviewerName: "",
        cardType: "movie",
      },
      {
        movieName: "Star Wars: A New Hope",
        releaseDate: "1st August, 2022",
        ratings: "9/10",
        comment: "",
        reviewerName: "",
        cardType: "movie",
      },
      {
        movieName: "Star Wars: A New Hope",
        releaseDate: "1st August, 2022",
        ratings: "9/10",
        comment: "",
        reviewerName: "",
        cardType: "movie",
      },
      {
        movieName: "Star Wars: A New Hope",
        releaseDate: "1st August, 2022",
        ratings: "9/10",
        comment: "",
        reviewerName: "",
        cardType: "movie",
      },
      {
        movieName: "Star Wars: A New Hope",
        releaseDate: "1st August, 2022",
        ratings: "9/10",
        comment: "",
        reviewerName: "",
        cardType: "movie",
      },
      {
        movieName: "Star Wars: A New Hope",
        releaseDate: "1st August, 2022",
        ratings: "9/10",
        comment: "",
        reviewerName: "",
        cardType: "movie",
      },
    ];
  }),

  create: publicProcedure.input(movieInput).mutation(async ({ ctx, input }) => {
    return ctx.db.movie.create({ data : input})
  }),

  delete: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    ctx.db.movie.delete({
      where : {
        movieId: input
      }
    })

    return ctx.db.review.deleteMany({
      where : {
        movieId: input
      }
    })
  })
});
