import axios from "axios"
import  cheerio  from "cheerio";

const caller = async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://github.com/hkirat',
    headers: { 
      'Cookie': '_gh_sess=edIzFnOzIWfNRXbNer6XtNuXkVVDhfHGDLkgD6iJ8trgSv%2FIQ285drPb6A2waPn8JHzn6yqSpsiizxww3k8f82Jdy5TredW1fhma6HpHn469IAWGtakjShvqIzBzeGHc01vRxkujNNwByuZ6H6VCur6pRxn0ewj3FA5Isf0YgN9LXDaA4vEybTVtzaML%2Fn3%2B%2BJ%2BpCbDm2ohlHV3TGnAGie%2FAoGLko7%2BuXLZs6FV2KqQzUxXXUdkvh3xZ4PpTYj9B0oIylho9hb%2BG%2FfgwVQf7YQ%3D%3D--8vH9MI5MnltBzCfz--9oO%2BhuW5MOfY8pF09KZTzg%3D%3D; _octo=GH1.1.182094238.1716735801; logged_in=no'
    }
  };

  try {
    const response = await axios.request(config);
    const followers = parseHTML(response.data);
    if (followers) {
      console.log("Total followers : " + followers);
    }
  } catch (error) {
    console.error(error);
  }
};

const parseHTML = (htmlContent) => {
  const $ = cheerio.load(htmlContent);
  const followerCount = $('span.text-bold').first().text().trim();
  return followerCount;
};

caller();
