import { z } from 'zod';

export const Recipe = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  slug: z.string(),
  metadata: z.object({
    difficulty: z.string().optional(),
    prep_time: z.string().optional(),
    cook_time: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.number().or(z.null()),
      unit: z.string().or(z.null()),
      notes: z.string().or(z.null()),
    }),
  ),
  steps: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
    }),
  ),
});

export type Recipe = z.infer<typeof Recipe>;

export default [
  {
    id: 'rcp_1',
    name: 'Tomato and Egg',
    description: 'An ultra mega classic staple in Chinese households',
    slug: 'tomato-and-egg',
    metadata: {
      difficulty: 'easy',
      prep_time: '5-10 minutes',
      cook_time: '10-15 minutes',
      tags: ['chinese', 'breakfast', 'lunch', 'dinner'],
    },
    ingredients: [
      {
        name: 'Tomatoes',
        quantity: 2,
        unit: 'whole',
        notes: null,
      },
      {
        name: 'Eggs',
        quantity: 2,
        unit: 'whole',
        notes: null,
      },
      {
        name: 'Salt',
        quantity: null,
        unit: null,
        notes: 'to taste',
      },
      {
        name: 'Oil',
        quantity: null,
        unit: null,
        notes: 'enough to cover the bottom of the pan',
      },
    ],
    steps: [
      {
        id: 'stp_1',
        name: 'Prep tomatoes',
        description:
          'Cut the tomatoes into wedges. 6 per tomato is typically good.',
      },
      {
        id: 'stp_2',
        name: 'Prep eggs',
        description:
          'Crack the eggs into a bowl. Add salt and beat until well mixed',
      },
      {
        id: 'stp_3',
        name: 'Heat',
        description: 'Heat oil in a pan over medium heat',
      },
      {
        id: 'stp_4',
        name: 'Add tomatoes',
        description:
          'Add tomatoes to the pan and stir fry until they start to soften',
      },
      {
        id: 'stp_5',
        name: 'Add eggs',
        description:
          'Pour in the beaten eggs and gently stir. This step should be relatively fast. Turn off the heat early to prevent overcooking. The pan’s residual heat will finish cooking the eggs.',
      },
    ],
  },
  {
    id: 'rcp_2',
    name: 'Pesto Pasta',
    description:
      "Easy-to-make pasta recipe that fools you into thinking you're eating something healthy because it's green",
    slug: 'pesto-pasta',
    metadata: {
      difficulty: 'easy',
      prep_time: '5-10 minutes',
      cook_time: '5-10 minutes',
      tags: ['italian', 'lunch', 'dinner', 'vegetarian'],
    },
    ingredients: [
      {
        name: 'Pasta',
        quantity: 100,
        unit: 'grams',
        notes: 'Use whatever pasta shape you like.',
      },
      {
        name: 'Pesto',
        quantity: 1,
        unit: 'tablespoon',
        notes: 'Store bought or homemade',
      },
    ],
    steps: [
      {
        id: 'stp_1',
        name: 'Cook pasta',
        description:
          'Cook pasta according to package instructions. Drain and set aside.',
      },
      {
        id: 'stp_2',
        name: 'Mix pasta and pesto',
        description:
          'Add pesto to the pasta and mix until well combined. Serve immediately.',
      },
    ],
  },
  {
    id: 'rcp_3',
    name: 'Pancakes',
    description: 'All American breakfast item',
    slug: 'pancakes',
    metadata: {
      difficulty: 'medium',
      prep_time: '5-10 minutes',
      cook_time: '10-15 minutes',
      tags: ['american', 'breakfast', 'vegetarian'],
    },
    ingredients: [],
    steps: [],
  },
  {
    id: 'rcp_4',
    name: 'Seared Ribeye Steak',
    description:
      'Versatile steak recipe to impress your friends... unless they cook ribeyes too',
    slug: 'seared-ribeye-steak',
    metadata: {
      tags: ['american', 'dinner', 'meat', 'steak'],
    },
    ingredients: [],
    steps: [],
  },
  {
    id: 'rcp_5',
    name: 'Braised Short Ribs',
    description: 'Slow cooked, soupy meaty goodness',
    slug: 'braised-short-ribs',
    metadata: {
      tags: ['american', 'dinner', 'meat', 'short ribs', 'slow'],
    },
    ingredients: [],
    steps: [],
  },
] satisfies Recipe[];
