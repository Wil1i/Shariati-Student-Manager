const convert = (rank) => {
  const convertedRanks = {
    teacher: "معلم",
    manager: "مدیر پرورشی",
    developer: "توسعه دهنده",
    owner: "مدیر کل",
  };

  return convertedRanks[rank] ? convertedRanks[rank] : "مقام نامعتبر";
};

module.exports = convert;
