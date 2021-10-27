import { z } from "zod";

const User = z.object({
  username: z.string(),
});

User.parse({ username: "Ludwig" });

export type ZUser = z.infer<typeof User>;
