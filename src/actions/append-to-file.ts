import { type PathOrFileDescriptor, appendFile } from "node:fs";
import { type JsonObject, type KeyDownEvent, SingletonAction, action } from "@elgato/streamdeck";
import dayjs from "dayjs";
import { random_values } from "../lib/utils";

@action({ UUID: "com.junyeongh.daily-note-timestamp.time-stamp-file" })
export class AppendTimestampToFile extends SingletonAction<TimestampSettings> {
  private emoji: string;
  private passphrase: string;
  private text: string;

  constructor() {
    super();

    this.emoji = "";
    this.passphrase = "";
    this.text = "";
  }

  override async onKeyDown(ev: KeyDownEvent<JsonObject>): Promise<void> {
    const { settings } = ev.payload;

    // timestamp
    const time_format = "YYYY-MM-DD hh:mm A (UTC Z)";
    const timestamp = dayjs().format(time_format);
    // options for emoji and passphrase from checkboxes
    const [add_emoji, add_password] = settings.options as [boolean, boolean];
    const { emoji, passphrase } = random_values();
    this.emoji = emoji;
    this.passphrase = passphrase;
    // optional text from text field
    this.text = settings.optional_text as string;

    // e.g., - [b] `{timestamp}` {emoji?} {passphrase?} {text?}
    const result = `\n- [b] ${timestamp}${add_emoji ? ` ${this.emoji}` : ""}${add_password ? ` ${this.passphrase}` : ""} ${this.text}`;
    appendFile(settings.filename as PathOrFileDescriptor, result, (err) => {
      if (err) {
        ev.action.showAlert();
      } else {
        ev.action.showOk();
      }
    });
  }
}

@action({ UUID: "com.junyeongh.daily-note-timestamp.time-interval-file" })
export class AppendTimeintervalToFile extends SingletonAction<TimestampSettings> {
  private emoji: string;
  private passphrase: string;
  private text: string;

  constructor() {
    super();
    // initial values for emoji and passphrase
    const { emoji, passphrase } = random_values();
    this.emoji = emoji;
    this.passphrase = passphrase;
    this.text = "";
  }

  override async onKeyDown(ev: KeyDownEvent<JsonObject>): Promise<void> {
    const { settings, state } = ev.payload;

    // timestamp
    const time_format = "YYYY-MM-DD hh:mm A (UTC Z)";
    const timestamp = dayjs().format(time_format); // options for emoji and passphrase from checkboxes
    const [add_emoji, add_password] = settings.options as [boolean, boolean];
    // optional text from text field
    this.text = settings.optional_text as string;

    // e.g.,
    // - ["] `{timestamp}` 🔜 {emoji?}{passphrase?} {text?}
    // - ["] `{timestamp}` 🔚 {emoji?}{passphrase?} {text?}
    const result = `\n- ["] ${timestamp} ${state === 0 ? "🔜" : "🔚"}${add_emoji ? ` ${this.emoji}` : ""}${add_password ? ` ${this.passphrase}` : ""} ${this.text}`;
    appendFile(settings.filename as PathOrFileDescriptor, result, (err) => {
      if (err) {
        ev.action.showAlert();
      } else {
        ev.action.showOk();
        // update emoji and passphrase before changing the state from 1 🔚 to 0 🔜
        if (state === 1) {
          const { emoji, passphrase } = random_values();
          this.emoji = emoji;
          this.passphrase = passphrase;
        }
        ev.action.setState(state === 0 ? 0 : 1);
      }
    });
  }
}

type TimestampSettings = {
  filename: string;
  options: [boolean, boolean];
  optional_text: string;
};
