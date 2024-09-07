import Groq from "groq-sdk";
import { FormValues } from "../getWorkout/page";
import { cache, Dispatch, SetStateAction } from "react";
import { error } from "console";

export async function getWorkout(
  data: FormValues,
  setWorkout: {
    (value: SetStateAction<string | null>): void;
    (arg0: string): void;
  },
  setLoading: { (value: SetStateAction<Boolean>): void; (arg0: boolean): void }
) {
  async function main() {
    const groq = new Groq({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });
    try {
      setLoading(true);
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Can you write me workout for ${data.goal}, I am ${data.height}cm tall and weight ${data.weight}. Me expirience level is ${data.experience} and I would like to workout ${data.freq}. My preferred workout should be ${data.workoutType}`,
          },
        ],
        model: "llama3-8b-8192",
        temperature: 1,
        max_tokens: 2050,
        top_p: 1,
        stream: false,
        stop: null,
      });

      const response = chatCompletion.choices[0].message.content;

      const formatTextToHTML = (input: string) => {
        return input!
          .replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>")
          .replace(/(\d+\. [^\n]+)/g, "<li>$1</li>")
          .replace(/(?:^|\n)\* (.*?)(?=\n|$)/g, "<ul><li>$1</li></ul>")
          .replace(/\n/g, "<br>");
      };

      const formattedHTML = formatTextToHTML(response!);

      setWorkout(formattedHTML);
    } catch {
      (err: any) => console.log(err);
    } finally {
      setLoading(false);
    }
  }
  main();
}
