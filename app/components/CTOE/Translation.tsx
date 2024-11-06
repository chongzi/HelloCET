"use client";

import ExamSection from "../Common/ExamSection";
import type { ExamPaper } from "@/app/types/exam";

type TranslationData = Pick<ExamPaper, "translation">;

interface TranslationProps {
  data: TranslationData | null;
  isLoading: boolean;
  answer: string;
  onAnswerChange: (value: string) => void;
  readOnly?: boolean;
  referenceAnswer: string;
}

const Translation = ({
  data,
  isLoading,
  answer,
  onAnswerChange,
  readOnly,
  referenceAnswer,
}: TranslationProps) => {
  return (
    <ExamSection title="Part IV Translation" isLoading={isLoading}>
      {data && (
        <>
          <div className="mb-6">
            <div className="prose max-w-none text-left">
              <h3 className="text-sm text-gray-500 mb-6 text-left">
                For this part, you are allowed 30 minutes to translate a passage
                from Chinese into English. You should write your answer on
                Answer Sheet 2.
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {data.translation.ChinesePassage}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <textarea
              id="translation"
              rows={10}
              value={answer}
              onChange={(e) => onAnswerChange(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="在此输入你的翻译..."
              readOnly={readOnly}
            />
          </div>

          {readOnly && referenceAnswer && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">参考译文</h3>
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="whitespace-pre-wrap text-gray-700">
                  {referenceAnswer}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </ExamSection>
  );
};

export default Translation;
