
export interface Choice {
  label: string;
}

export interface FieldProperties {
  choices?: Choice[];
  button_text?: string;
  show_button?: boolean;
  redirect_url?: string;
}

export interface Validation {
  required?: boolean;
}

export type MediaType = 'image' | 'video' | 'audio' | 'youtube';

export interface Media {
  type: MediaType;
  url: string;
  alt?: string;
  autoplay?: boolean; // Para vídeos e áudios
  transcript?: string; // Novo campo para transcrição do áudio
}

export interface Field {
  id: string;
  title: string;
  subtitle?: string;
  media?: Media; // Novo campo para mídia
  type: 'multiple_choice' | 'number' | 'long_text' | 'welcome_screen' | 'thankyou_screen';
  properties?: FieldProperties;
  validations?: Validation;
}

export interface LogicCondition {
  op: 'equal' | 'not_equal' | 'contains' | 'less_than' | 'greater_than';
  vars: [string, any];
}

export interface LogicRule {
  type: 'jump';
  from: string;
  to: string;
  condition?: LogicCondition;
}

export interface QuizSettings {
  is_public: boolean;
  language: string;
  progress_bar: string;
  show_progress_bar: boolean;
}

export interface QuizData {
  title: string;
  settings: QuizSettings;
  fields: Field[];
  logic: LogicRule[];
  thankyou_screens: Field[];
}