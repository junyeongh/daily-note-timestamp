import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { AppendTimeintervalToFile, AppendTimestampToFile } from "./actions/append-to-file";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the actions.
streamDeck.actions.registerAction(new AppendTimestampToFile());
streamDeck.actions.registerAction(new AppendTimeintervalToFile());

// Finally, connect to the Stream Deck.
streamDeck.connect();
