import data from "../data/templates.json" assert { type: "json" };

export const getFilm = async (_, res) => {
  try {
    res.status(200).json({
      success: true,
      films: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
