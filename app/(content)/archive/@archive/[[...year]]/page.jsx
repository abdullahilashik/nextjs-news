import NewsList from "@/components/news/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import React from "react";

const ArchivedYear = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  const filter = params.year;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  
  let news = [];
  let links = getAvailableNewsYears();
  let newsContent = 'No news to display for the selected time period.'

  if(selectedYear && !selectedMonth){
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);    
  }

  if(selectedYear && selectedMonth){
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = getAvailableNewsMonths(selectedYear);
  }

  if(news && news.length > 0){
    newsContent = <NewsList news={news} />;
  }

  if(
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <>
    <div id="archive-header">
      <nav>
        <ul>
          {links.map((link, key) => 
            {
              const href = selectedYear ? `/archive/${selectedYear}/${link}`: `/archive/${link}`;
              return (
                <li key={key}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            }
          )}
        </ul>
      </nav>      
    </div>
    {newsContent}
    </>
  );
};

export default ArchivedYear;
