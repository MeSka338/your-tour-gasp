import React from "react";
import s from "./Stories.module.scss";
import CardBig from "@/src/components/common/CardBig";
import SectionTitle from "@/src/components/common/SectionTitle/SectionTitle";
const Stories = () => {
  return (
    <section className={s.root}>
      {/* <SectionTitle
        title={"Истории путешествий"}
        subtitle={
          " Идейные соображения высшего порядка, а также рамки и место обучениякадров"
        }
      /> */}

      <CardBig
        img="/stories/story photo-1.jpg"
        title="Автостопом в Стамбул"
        subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."
        subtitbleList={true}
        socials={["instagram", "facebook", "YouTube"]}
      />
      <CardBig
        img="/stories/story photo-2.jpg"
        title="Автостопом в Стамбул"
        subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."
        subtitbleList={false}
        socials={["instagram", "ВКонтакте"]}
      />
      <CardBig
        img="/stories/story photo-3.jpg"
        title="Автостопом в Стамбул"
        subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."
        subtitbleList={false}
        socials={["instagram", "facebook", "ВКонтакте"]}
      />
    </section>
  );
};

export default Stories;
