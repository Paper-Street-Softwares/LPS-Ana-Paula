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
          <p
            className={`flex justify-center text-xl font-secondFont text-center text-white w-full mb-12  max-w-[600px] bg-primaryDark p-8 rounded-2xl`}
          >
            Muitos bancos não seguem todas as regras legais — e isso pode abrir
            uma oportunidade real de proteger o seu patrimônio.
          </p>
        </MotionDivDownToUp>

        <MotionDivDownToUp>
          <div className="grid tablet2:grid-cols-2 gap-6 mb-6">
            {listCard.map((item, index) => (
              <div
                key={index}
                className="bg-terciary backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-[500px] h-fit"
              >
                {/* Título */}
                <div className="bg-white w-fit p-4 rounded-full text-primaryDark shadow mb-4">
                  <Shield />
                </div>
                <h1 className="text-xl leading-6 font-secondFont font-semibold mb-4 text-black group-hover:text-corOutrosTextosPreto/90">
                  {item.text}
                </h1>

                {/* Conteúdo principal */}
                <div className=" text-black">
                  <span className="text-lg font-secondFont">
                    {item.container}
                  </span>
                </div>

                {/* Observação */}
                {item.obs && (
                  <p className="mt-4 text-base font-secondFont text-black leading-relaxed">
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
