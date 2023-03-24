import relativeDate from 'tiny-relative-date';

export default function prettyDate(value) {
  try {
    const date = new Date(value);
    const formatted = relativeDate(date);
    return formatted;
  } catch (error) {
    return 'a while ago';
  }
}
