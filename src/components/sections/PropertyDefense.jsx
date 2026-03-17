import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import content from "../../content/content";
import { Check, Shield } from "lucide-react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ButtonReflexo from "../interactives/ButtonReflexo";
import { defaultButtonThemes } from "../../context/UseContextArchive";

function PropertyDefense({ colorMode }) {
  const listCard = Object.values(content.texts.defenseSection.cards);

  return (
    <SectionArea>
      <SectionWrapper>
        <SectionHeaderNovo
          colorMode={colorMode}
          miniTitle={content.texts.defenseSection.miniTag}
          title={content.texts.defenseSection.title}
          subtitle={content.texts.defenseSection.subtitle}
        />

        <MotionDivDownToUp>
          <div className="grid tablet2:grid-cols-2 gap-6 mb-6">
            {listCard.map((item, index) => (
              <div
                key={index}
                className="bg-primaryDark/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-[500px] h-fit"
              >
                {/* Título */}
                <div className="bg-white w-fit p-4 rounded-full text-primaryDark shadow mb-4">
                  <Shield />
                </div>
                <h1 className="text-lg font-secondFont font-semibold mb-4 text-corOutrosTextosPreto group-hover:text-corOutrosTextosPreto/90">
                  {item.text}
                </h1>

                {/* Conteúdo principal */}
                <div className=" text-corOutrosTextosPreto/80 mb-3">
                  <span className="text-sm font-secondFont">
                    {item.container}
                  </span>
                </div>

                {/* Observação */}
                {item.obs && (
                  <p className="text-xs font-secondFont text-corOutrosTextosPreto leading-relaxed">
                    {item.obs}
                  </p>
                )}
              </div>
            ))}
          </div>
        </MotionDivDownToUp>

        <MotionDivDownToUp className={`flex justify-center w-full`}>
          <ButtonReflexo
            label={content.texts.important.ctaButtonText}
            icon={content.texts.svgs.wpp}
            link={content.texts.links.ctaWhatsapp}
            className={`clickevent`}
            bgClass={
              colorMode === "defaultDark" || colorMode === "light"
                ? defaultButtonThemes.light
                : defaultButtonThemes.dark
            }
          />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default PropertyDefense;
