import "the_loader";
import "./style.css";
import { generateQRCode } from "./lib/generateCode";
import { copyToClipboard } from "./lib/copyToClipboard";
import { download } from "./lib/download";

const inputEl = document.querySelector<HTMLInputElement>("input");
const selectEl = document.querySelector("select");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector('#copy');
const saveBtn = document.querySelector('#save');
const loader = document.querySelector("the-loader");

generateBtn?.addEventListener("click", () => {
  const code = document.getElementById("code") as HTMLElement;
  code.innerHTML = "";
  if (inputEl?.value === "") {
    alert("Please enter a URL");
    return;
  }
  const url = inputEl?.value as string;
  const size = parseInt(selectEl?.value as string, 10);
  loader?.classList.remove("hidden");

  setTimeout(() => {
    loader?.classList.add("hidden");
    generateQRCode(url, size);
  }, 1000);
});


copyBtn?.addEventListener('click', () => copyToClipboard())
saveBtn?.addEventListener('click', () => download())
