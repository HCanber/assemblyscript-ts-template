#!/usr/bin/env node
import process from "node:process";
if (process.stdout.isTTY && !process.env.NO_CLS)
  process.stdout.write("\u001Bc");
