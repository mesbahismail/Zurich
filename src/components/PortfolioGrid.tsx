"use client";

import { useState } from "react";
import { Select } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { stories } from "@/lib/portfolio";
import Albumcard from "./Albumcard";

const sortOptions = [
  { value: "newest", label: "Date", option: "Newest first" },
  { value: "oldest", label: "Date", option: "Oldest first" },
  { value: "name", label: "Name", option: "Name" },
];

export default function PortfolioGrid() {
  const [sort, setSort] = useState("newest");
  const selected = sortOptions.find((option) => option.value === sort) ?? sortOptions[0];
  const sorted = [...stories].sort((a, b) =>
    sort === "name"
      ? a.names.localeCompare(b.names)
      : sort === "oldest"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date)
  );

  return (
    <section className="portfolio content-width">
      <div className="portfolio-sort">
        <span className="portfolio-sort-label" id="album-sort-label">Sort</span>
        <Select.Root value={sort} onValueChange={setSort}>
          <Select.Trigger
            className="portfolio-sort-trigger"
            aria-labelledby="album-sort-label album-sort-value"
          >
            <Select.Value id="album-sort-value">
              {selected.label}<span className="sr-only">, {selected.option === "Name" ? "A–Z" : selected.option}</span>
            </Select.Value>
            <Select.Icon asChild>
              <ChevronDown className="portfolio-sort-chevron" size={14} strokeWidth={1.25} aria-hidden="true" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="portfolio-sort-menu" position="popper" sideOffset={7} align="end" collisionPadding={16}>
              <Select.Viewport>
                {sortOptions.map((option) => (
                  <Select.Item className="portfolio-sort-option" key={option.value} value={option.value} textValue={option.option}>
                    <Select.ItemText>{option.option}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div className="album-grid">
        {sorted.map((story) => <Albumcard key={story.slug} story={story} />)}
      </div>
    </section>
  );
}
