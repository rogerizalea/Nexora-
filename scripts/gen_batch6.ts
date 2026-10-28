import * as fs from 'fs';
import * as path from 'path';

function writeSubjectFile(fileName: string, exportName: string, subjectTitle: string, questions: any[]) {
  const content = `import { Question } from '../../types';

/**
 * BANCO OFICIAL DE PREGUNTAS: ${subjectTitle.toUpperCase()}
 * 100 Reactivos Verificados Pedagógicamente:
 * - 20 Básico
 * - 20 Intermedio
 * - 20 Bachillerato
 * - 20 Técnico
 * - 20 Universitario
 */
export const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;
  const outPath = path.join(process.cwd(), 'src/data/questions', fileName);
  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${outPath}`);
}

// =========================================================================
// 8. INGLÉS (100 preguntas)
// =========================================================================
function makeIngles() {
  const items: any[] = [];

  // 20 Básico
  const basRaw = [
    {
      q: 'Choose the correct form of the verb "to be" to complete the sentence: "She ___ a dedicated student at the academy."',
      opts: ['am', 'is', 'are', 'be'],
      ans: 1,
      exp: 'In present simple, third person singular pronouns (he, she, it) require the verb form "is".',
      skill: 'Verb To Be Present Simple',
      topic: 'Basic Grammar',
      sub: 'Present Simple of Be'
    },
    {
      q: 'What is the correct English translation of the greeting: "Buenos días"?',
      opts: ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
      ans: 1,
      exp: '"Good morning" is the standard formal and informal greeting used from dawn until midday (12:00 PM).',
      skill: 'Basic Everyday Greetings',
      topic: 'Vocabulary',
      sub: 'Greetings and Expressions'
    },
    {
      q: 'Complete the sentence with the appropriate subject pronoun: "___ are playing soccer in the park." (talking about Tom and Jerry)',
      opts: ['He', 'She', 'They', 'It'],
      ans: 2,
      exp: 'The third person plural subject pronoun for two or more individuals (Tom and Jerry) is "They".',
      skill: 'Subject Pronouns',
      topic: 'Grammar',
      sub: 'Personal Pronouns'
    },
    {
      q: 'What is the plural form of the noun "child"?',
      opts: ['Childs', 'Children', 'Childrens', 'Childes'],
      ans: 1,
      exp: '"Child" has an irregular plural in English: "children" (without adding an extra "s").',
      skill: 'Irregular Plural Nouns',
      topic: 'Morphology',
      sub: 'Plural Nouns'
    },
    {
      q: 'Choose the correct indefinite article: "I eat ___ apple every morning."',
      opts: ['a', 'an', 'the', 'some'],
      ans: 1,
      exp: 'The indefinite article "an" is used before words that begin with a vowel sound (such as "apple").',
      skill: 'Articles A and An',
      topic: 'Grammar',
      sub: 'Indefinite Articles'
    },
    {
      q: 'Which word is the opposite (antonym) of "hot"?',
      opts: ['Warm', 'Cold', 'Boiling', 'Sunny'],
      ans: 1,
      exp: '"Cold" is the direct antonym of "hot" regarding temperature.',
      skill: 'Basic Antonyms',
      topic: 'Vocabulary',
      sub: 'Opposites'
    },
    {
      q: 'Complete the question: "___ is your favorite book?" - "My favorite book is Don Quixote."',
      opts: ['Where', 'What', 'When', 'Who'],
      ans: 1,
      exp: 'The question word "What" is used to ask for specific information about things or objects.',
      skill: 'Wh- Question Words',
      topic: 'Syntax',
      sub: 'Question Formation'
    },
    {
      q: 'Select the correct possessive adjective: "We love ___ school because the teachers are great."',
      opts: ['our', 'their', 'your', 'its'],
      ans: 0,
      exp: 'The possessive adjective corresponding to the subject pronoun "We" is "our".',
      skill: 'Possessive Adjectives',
      topic: 'Grammar',
      sub: 'Possessives'
    },
    {
      q: 'What time is it if someone says: "It is half past four"?',
      opts: ['4:15', '4:30', '4:45', '5:30'],
      ans: 1,
      exp: '"Half past four" means 30 minutes past 4 o\'clock, which is 4:30.',
      skill: 'Telling the Time in English',
      topic: 'Everyday Language',
      sub: 'Clock and Time'
    },
    {
      q: 'Choose the correct preposition of place: "The book is ___ the table." (resting on top of its surface)',
      opts: ['in', 'on', 'at', 'under'],
      ans: 1,
      exp: 'The preposition "on" indicates position on a horizontal or vertical surface.',
      skill: 'Prepositions of Place',
      topic: 'Grammar',
      sub: 'Prepositions In, On, At'
    },
    {
      q: 'Which of the following numbers in words corresponds to 75?',
      opts: ['Sixty-five', 'Seventy-five', 'Eighty-five', 'Fifty-seven'],
      ans: 1,
      exp: '75 is written as "seventy-five" with a hyphen between the tens and units.',
      skill: 'Cardinal Numbers',
      topic: 'Vocabulary',
      sub: 'Numbers'
    },
    {
      q: 'Complete the sentence in the negative form: "I ___ like spicy food."',
      opts: ['does not', 'am not', 'do not', 'is not'],
      ans: 2,
      exp: 'In present simple negative with "I", we use the auxiliary "do not" (or "don\'t") before the base verb.',
      skill: 'Present Simple Negative',
      topic: 'Grammar',
      sub: 'Auxiliary Verbs'
    },
    {
      q: 'Which color do you get if you mix blue and yellow?',
      opts: ['Red', 'Green', 'Purple', 'Orange'],
      ans: 1,
      exp: 'Mixing the primary colors blue and yellow produces the secondary color green.',
      skill: 'Basic Vocabulary of Colors',
      topic: 'Vocabulary',
      sub: 'Colors'
    },
    {
      q: 'Choose the correct day that comes after Wednesday:',
      opts: ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
      ans: 1,
      exp: 'The chronological order of weekdays is Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
      skill: 'Days of the Week',
      topic: 'Vocabulary',
      sub: 'Calendar'
    },
    {
      q: 'Complete with the correct demonstrative pronoun: "___ is my new bicycle right here beside me."',
      opts: ['This', 'That', 'These', 'Those'],
      ans: 0,
      exp: '"This" is the singular demonstrative used for an object physically close to the speaker.',
      skill: 'Demonstrative Pronouns',
      topic: 'Grammar',
      sub: 'This, That, These, Those'
    },
    {
      q: 'What is the past simple form of the regular verb "watch"?',
      opts: ['Watching', 'Watched', 'Watches', 'Wotched'],
      ans: 1,
      exp: 'Regular verbs form their past simple by adding the suffix "-ed" to the base form: watch → watched.',
      skill: 'Regular Past Simple Verbs',
      topic: 'Verb Tenses',
      sub: 'Past Simple Affirmative'
    },
    {
      q: 'Select the word that represents a member of the nuclear family:',
      opts: ['Window', 'Brother', 'Kitchen', 'Notebook'],
      ans: 1,
      exp: '"Brother" denotes a male sibling within family relationships.',
      skill: 'Family Vocabulary',
      topic: 'Vocabulary',
      sub: 'Family Members'
    },
    {
      q: 'Complete: "How ___ apples are there in the basket?"',
      opts: ['much', 'many', 'long', 'often'],
      ans: 1,
      exp: '"How many" is used with plural countable nouns (such as apples). "How much" is used with uncountable nouns.',
      skill: 'Quantifiers Many and Much',
      topic: 'Grammar',
      sub: 'Countable vs Uncountable'
    },
    {
      q: 'Which animal is known in English as "the king of the jungle"?',
      opts: ['Elephant', 'Lion', 'Bear', 'Monkey'],
      ans: 1,
      exp: 'The lion (Panthera leo) is popularly referred to in English literature as "the king of the jungle".',
      skill: 'Animals Vocabulary',
      topic: 'Vocabulary',
      sub: 'Animals'
    },
    {
      q: 'Complete the short answer: "Can you swim?" - "Yes, I ___."',
      opts: ['do', 'am', 'can', 'have'],
      ans: 2,
      exp: 'Questions starting with the modal verb "Can" require "can" in the affirmative short answer: "Yes, I can."',
      skill: 'Modal Verb Can and Short Answers',
      topic: 'Grammar',
      sub: 'Modal Verbs'
    }
  ];

  basRaw.forEach((item, idx) => {
    items.push({
      id: `ing-bas-${idx + 1}`,
      sectionId: 8,
      number: idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Fácil',
      educationalLevel: 'Básico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Intermedio
  const intRaw = [
    {
      q: 'Complete the sentence with the correct past continuous form: "While Mark ___ for the bus, it began to rain heavily."',
      opts: ['is waiting', 'was waiting', 'waited', 'has waited'],
      ans: 1,
      exp: 'Past continuous (was/were + verb-ing) describes an action that was in progress in the past when another shorter event interrupted it in past simple.',
      skill: 'Past Continuous vs Past Simple',
      topic: 'Grammar',
      sub: 'Past Narrative Tenses'
    },
    {
      q: 'Choose the correct First Conditional sentence describing a real future possibility:',
      opts: [
        'If it rains tomorrow, we will stay at home.',
        'If it will rain tomorrow, we stay at home.',
        'If it rained tomorrow, we would stayed at home.',
        'If it rain tomorrow, we stay home.'
      ],
      ans: 0,
      exp: 'First Conditional structure: If + present simple, ... will + base verb. "If it rains tomorrow, we will stay at home."',
      skill: 'First Conditional',
      topic: 'Conditionals',
      sub: 'Real Conditions'
    },
    {
      q: 'Complete with the present perfect: "They ___ in this city since 2018."',
      opts: ['lived', 'have lived', 'are living', 'were living'],
      ans: 1,
      exp: 'The present perfect (have/has + past participle) is used with "since" to indicate an action that started in the past and continues into the present.',
      skill: 'Present Perfect with Since and For',
      topic: 'Verb Tenses',
      sub: 'Present Perfect Simple'
    },
    {
      q: 'What is the correct comparative form of the adjective "comfortable"?',
      opts: ['Comfortabler', 'More comfortable', 'Most comfortable', 'As comfortable'],
      ans: 1,
      exp: 'Long adjectives with three or more syllables form their comparative by placing "more" before the adjective.',
      skill: 'Comparative Adjectives',
      topic: 'Grammar',
      sub: 'Comparatives and Superlatives'
    },
    {
      q: 'Select the sentence that correctly uses the modal verb of deduction in the present:',
      opts: [
        'She must be at home; her car is parked in the driveway.',
        'She can to be at home.',
        'She musts be at home.',
        'She should to be at home.'
      ],
      ans: 0,
      exp: '"Must + base verb" expresses strong logical deduction or certainty based on clear evidence.',
      skill: 'Modals of Deduction',
      topic: 'Modal Verbs',
      sub: 'Must, Might, Can\'t'
    },
    {
      q: 'Which preposition correctly completes the phrase: "She has been interested ___ astronomy since childhood"?',
      opts: ['on', 'in', 'at', 'with'],
      ans: 1,
      exp: 'The dependent preposition following the adjective "interested" is always "in".',
      skill: 'Dependent Prepositions',
      topic: 'Vocabulary and Grammar',
      sub: 'Adjective + Preposition'
    },
    {
      q: 'Choose the correct passive voice version of: "The chef cooked a delicious dinner."',
      opts: [
        'A delicious dinner was cooked by the chef.',
        'A delicious dinner is cooked by the chef.',
        'A delicious dinner has been cooked by the chef.',
        'A delicious dinner were cooked by the chef.'
      ],
      ans: 0,
      exp: 'Past simple passive structure: Subject + was/were + past participle. "A delicious dinner was cooked by the chef."',
      skill: 'Passive Voice in Past Simple',
      topic: 'Voice',
      sub: 'Active vs Passive Voice'
    },
    {
      q: 'What does the phrasal verb "give up" mean in the sentence: "Never give up on your dreams"?',
      opts: ['Deliver a gift', 'Surrender or quit trying', 'Climb upwards', 'Postpone an event'],
      ans: 1,
      exp: 'The idiomatic phrasal verb "give up" means to abandon, surrender, or cease an effort.',
      skill: 'Common Phrasal Verbs',
      topic: 'Vocabulary',
      sub: 'Phrasal Verbs'
    },
    {
      q: 'Complete with the correct relative pronoun: "The scientist ___ discovered the vaccine received an international award."',
      opts: ['which', 'who', 'whose', 'where'],
      ans: 1,
      exp: 'The relative pronoun "who" (or "that") refers to people as the subject of the relative clause.',
      skill: 'Defining Relative Clauses',
      topic: 'Complex Sentences',
      sub: 'Relative Pronouns'
    },
    {
      q: 'Identify the sentence with correct word order for adverbs of frequency:',
      opts: [
        'He goes always to the library on Mondays.',
        'He always goes to the library on Mondays.',
        'Always he goes to the library on Mondays.',
        'He goes to the library always on Mondays.'
      ],
      ans: 1,
      exp: 'Adverbs of frequency (always, often, usually, never) are placed before the main verb, but after the verb "to be".',
      skill: 'Position of Adverbs of Frequency',
      topic: 'Syntax',
      sub: 'Adverb Placement'
    },
    {
      q: 'Complete the Second Conditional sentence: "If I ___ a million dollars, I would travel around the world."',
      opts: ['have', 'had', 'will have', 'would have'],
      ans: 1,
      exp: 'Second conditional for hypothetical present/future situations: If + past simple, ... would + base verb.',
      skill: 'Second Conditional Hypotheses',
      topic: 'Conditionals',
      sub: 'Hypothetical Conditions'
    },
    {
      q: 'Choose the correct question tag: "You haven\'t seen my glasses anywhere, ___?"',
      opts: ['do you', 'have you', 'haven\'t you', 'did you'],
      ans: 1,
      exp: 'Negative main clauses with "haven\'t" take an affirmative question tag with the same auxiliary: "have you?".',
      skill: 'Question Tags',
      topic: 'Conversational Grammar',
      sub: 'Tag Questions'
    },
    {
      q: 'What is the past participle form of the irregular verb "write"?',
      opts: ['Wrote', 'Written', 'Writing', 'Writed'],
      ans: 1,
      exp: 'The principal parts are write (infinitive) - wrote (past simple) - written (past participle).',
      skill: 'Irregular Verb Forms',
      topic: 'Morphology',
      sub: 'Past Participles'
    },
    {
      q: 'Complete with the correct quantifier: "We have ___ milk left, so we don\'t need to buy any today."',
      opts: ['few', 'a little', 'many', 'a few'],
      ans: 1,
      exp: '"A little" is used with uncountable nouns (like milk) to indicate a sufficient small quantity.',
      skill: 'Quantifiers A Little vs A Few',
      topic: 'Grammar',
      sub: 'Quantifiers'
    },
    {
      q: 'Which conjunction expresses contrast between two ideas?',
      opts: ['Although', 'Because', 'Therefore', 'Moreover'],
      ans: 0,
      exp: '"Although" is a subordinating conjunction of concession used to connect contrasting clauses.',
      skill: 'Linking Words and Connectors',
      topic: 'Discourse Markers',
      sub: 'Concession and Contrast'
    },
    {
      q: 'Complete the reported speech sentence: "I will call you tomorrow," David said. → David said that he ___ call me the next day.',
      opts: ['will', 'would', 'can', 'must'],
      ans: 1,
      exp: 'In indirect reported speech with a past reporting verb, "will" shifts back to "would" (backshift of tenses).',
      skill: 'Reported Speech Backshift',
      topic: 'Reported Speech',
      sub: 'Tense Shifts'
    },
    {
      q: 'Select the sentence that correctly uses a gerund as the object of a preposition:',
      opts: [
        'She is tired of working long hours every weekend.',
        'She is tired of to work long hours.',
        'She is tired of work long hours.',
        'She is tired of worked long hours.'
      ],
      ans: 0,
      exp: 'Verbs following any preposition must take the gerund form (-ing): "tired of working".',
      skill: 'Gerunds after Prepositions',
      topic: 'Verb Patterns',
      sub: 'Gerund vs Infinitive'
    },
    {
      q: 'What is the meaning of the idiom "piece of cake"?',
      opts: ['A delicious birthday dessert', 'Something very easy to accomplish', 'An expensive purchase', 'A difficult challenge'],
      ans: 1,
      exp: 'The colloquial English idiom "a piece of cake" means a task that is effortless or simple to achieve.',
      skill: 'Idiomatic Expressions',
      topic: 'Idioms',
      sub: 'Everyday Idioms'
    },
    {
      q: 'Complete with the correct modal verb of obligation: "In most countries, drivers ___ carry a valid driver\'s license."',
      opts: ['might', 'must', 'could', 'would'],
      ans: 1,
      exp: '"Must" expresses strong legal or moral obligation imposed by law or authority.',
      skill: 'Modals of Obligation and Law',
      topic: 'Modal Verbs',
      sub: 'Must vs Have to'
    },
    {
      q: 'Choose the correct form to complete the sentence: "By the time we arrived at the cinema, the film ___ already started."',
      opts: ['has', 'had', 'was', 'is'],
      ans: 1,
      exp: 'Past perfect (had + past participle) indicates an event that occurred before another event in the past.',
      skill: 'Past Perfect Simple',
      topic: 'Narrative Tenses',
      sub: 'Past Perfect Before Past Simple'
    }
  ];

  intRaw.forEach((item, idx) => {
    items.push({
      id: `ing-int-${idx + 1}`,
      sectionId: 8,
      number: 20 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Intermedio',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Bachillerato
  const bacRaw = [
    {
      q: 'Complete the Third Conditional sentence: "If they ___ the earlier train, they would not have missed the opening ceremony."',
      opts: ['took', 'had taken', 'have taken', 'would take'],
      ans: 1,
      exp: 'Third conditional for counterfactual past scenarios: If + past perfect (had taken), ... would have + past participle.',
      skill: 'Third Conditional Counterfactuals',
      topic: 'Advanced Conditionals',
      sub: 'Third Conditional'
    },
    {
      q: 'Which inversion structure correctly emphasizes the rarity of an event: "Rarely ___ such an extraordinary scientific discovery."',
      opts: [
        'we have witnessed',
        'have we witnessed',
        'we witnessed have',
        'did witnessed we'
      ],
      ans: 1,
      exp: 'When a negative or restrictive adverb (rarely, seldom, hardly) starts a sentence for emphasis, subject-auxiliary inversion is mandatory: Rarely + auxiliary (have) + subject (we) + verb (witnessed).',
      skill: 'Inversion after Negative Adverbials',
      topic: 'Advanced Syntax and Stylistics',
      sub: 'Inverted Sentence Structures'
    },
    {
      q: 'Complete with the appropriate subjunctive form: "The committee recommended that the proposal ___ thoroughly reviewed before implementation."',
      opts: ['is', 'be', 'was', 'being'],
      ans: 1,
      exp: 'The mandative subjunctive in formal English following verbs like recommend, suggest, demand requires the base form of the verb (be) for all persons.',
      skill: 'The Mandative Subjunctive in Formal English',
      topic: 'Advanced Grammar',
      sub: 'Mandative Subjunctive'
    },
    {
      q: 'What nuance of meaning distinguishes "used to live" from "is used to living" in English?',
      opts: [
        '"Used to live" indicates a past habit or state that no longer exists; "is used to living" indicates being accustomed or acclimated to a present living condition.',
        'They are interchangeable in all formal contexts.',
        '"Used to live" expresses the future.',
        '"Is used to living" expresses regret.'
      ],
      ans: 0,
      exp: '"Used to + base verb" refers to past discontinued states/habits; "be used to + -ing" expresses familiarity and habituation.',
      skill: 'Used to vs Be Used to vs Get Used to',
      topic: 'Grammar and Aspect',
      sub: 'Habitual Aspect'
    },
    {
      q: 'Choose the correct participle clause to replace: "Because she felt exhausted after the flight, Maria went straight to bed."',
      opts: [
        'Feeling exhausted after the flight, Maria went straight to bed.',
        'Felt exhausted after the flight, Maria went straight to bed.',
        'Having feel exhausted after the flight, Maria went straight to bed.',
        'To feel exhausted after the flight, Maria went straight to bed.'
      ],
      ans: 0,
      exp: 'A present participle clause (verb-ing) can explain the cause or reason for the action in the main clause when both share the same subject.',
      skill: 'Participle Clauses of Reason',
      topic: 'Complex Syntax',
      sub: 'Participle Clauses'
    },
    {
      q: 'Select the sentence containing a correct Mixed Conditional (hypothetical past condition with present consequence):',
      opts: [
        'If I had studied medicine back then, I would be a doctor today.',
        'If I studied medicine back then, I am a doctor today.',
        'If I would have studied medicine, I was a doctor today.',
        'If I have studied medicine, I would have been a doctor.'
      ],
      ans: 0,
      exp: 'Mixed conditional (Type 3 + Type 2): If + past perfect (past condition), ... would + base verb (present result): "If I had studied medicine, I would be a doctor today."',
      skill: 'Mixed Conditionals',
      topic: 'Conditionals',
      sub: 'Past Condition with Present Result'
    },
    {
      q: 'What is the rhetorical function of a cleft sentence like: "What impressed the examiners most was his analytical precision"?',
      opts: [
        'To ask a direct question about impressions',
        'To focus and emphasize a specific piece of information within the clause',
        'To express doubt and hesitation',
        'To turn an active clause into passive voice'
      ],
      ans: 1,
      exp: 'Wh-cleft sentences (and it-clefts) divide a clause into two parts to place strong thematic focus or pragmatic prominence on the highlighted element.',
      skill: 'Cleft Sentences and Information Packaging',
      topic: 'Discourse and Pragmatics',
      sub: 'Wh-Cleft Sentences'
    },
    {
      q: 'Complete with the appropriate future perfect continuous: "By next December, Dr. Jenkins ___ research on stem cells for two decades."',
      opts: ['will conduct', 'will have been conducting', 'is conducting', 'would conduct'],
      ans: 1,
      exp: 'Future perfect continuous (will have been + verb-ing) projects forward to a future deadline and emphasizes the ongoing duration of an activity up to that point.',
      skill: 'Future Perfect Continuous Tense',
      topic: 'Advanced Verb Tenses',
      sub: 'Future Aspect'
    },
    {
      q: 'Choose the idiom that means to avoid making a clear decision or remain neutral in a dispute:',
      opts: ['To sit on the fence', 'To bite the bullet', 'To burn the midnight oil', 'To spill the beans'],
      ans: 0,
      exp: '"To sit on the fence" is an idiomatic metaphor meaning to delay or avoid choosing between two opposing sides in a debate.',
      skill: 'Advanced Figurative Idioms',
      topic: 'Idiomatic Language',
      sub: 'Metaphorical Idioms'
    },
    {
      q: 'In academic writing, which cohesive device best introduces an elaboration that clarifies a preceding assertion?',
      opts: ['Namely (or that is to say)', 'On the contrary', 'Nevertheless', 'Notwithstanding'],
      ans: 0,
      exp: '"Namely" (or "that is to say" / "specifically") is used in formal prose to provide precise clarification or identification of what has just been mentioned.',
      skill: 'Academic Discourse Connectors',
      topic: 'Academic Writing',
      sub: 'Clarification Markers'
    },
    {
      q: 'Complete with the correct modal perfect of past speculation: "The streets are completely dry; it ___ rained last night."',
      opts: ['must have', 'can\'t have (or couldn\'t have)', 'should have', 'might have'],
      ans: 1,
      exp: '"Can\'t have + past participle" expresses strong certainty that a past event was impossible based on current physical evidence.',
      skill: 'Modals of Past Deduction',
      topic: 'Modal Verbs',
      sub: 'Can\'t Have + Participle'
    },
    {
      q: 'Identify the sentence featuring correct fronting of prepositional phrase with full subject-verb inversion:',
      opts: [
        'Down the slope rushed the mountain bikers.',
        'Down the slope the mountain bikers rushed.',
        'Down the slope did rush the mountain bikers.',
        'Rushed down the slope the mountain bikers.'
      ],
      ans: 0,
      exp: 'In descriptive literary prose, locative and directional prepositional phrases at the start of a clause trigger full subject-verb inversion with intransitive verbs of motion.',
      skill: 'Locative Inversion and Stylistic Fronting',
      topic: 'Literary Stylistics',
      sub: 'Full Inversion'
    },
    {
      q: 'Complete the sentence with the correct nominalization: "The sudden ___ of the stock market led to widespread financial panic."',
      opts: ['collapse', 'collapsing', 'collapsed', 'collapsibility'],
      ans: 0,
      exp: '"Collapse" serves here as a formal noun functioning as the head of the noun phrase preceded by the adjective "sudden".',
      skill: 'Nominalization in Formal Registers',
      topic: 'Morphology and Register',
      sub: 'Nominal Structures'
    },
    {
      q: 'What is the precise grammatical status of "having finished" in: "Having finished the experiment, the researchers analyzed the data"?',
      opts: ['Gerund subject', 'Perfect participle clause showing anteriority', 'Infinitive of purpose', 'Passive voice predicate'],
      ans: 1,
      exp: 'The perfect participle ("having + past participle") explicitly marks an action completed before the action in the main clause took place.',
      skill: 'Perfect Participles and Sequence of Events',
      topic: 'Complex Syntax',
      sub: 'Perfect Participle'
    },
    {
      q: 'Choose the sentence that correctly conveys concession with "however" acting as an adverb modifying an adjective:',
      opts: [
        'However difficult the challenge may seem, we must persevere.',
        'However, difficult the challenge may seem, we must persevere.',
        'The challenge however difficult may seem we must persevere.',
        'However is difficult the challenge we must persevere.'
      ],
      ans: 0,
      exp: '"However + adjective/adverb + subject + verb" functions as a concessive subordinate clause equivalent to "no matter how difficult".',
      skill: 'Concessive Structures with However',
      topic: 'Advanced Syntax',
      sub: 'However + Adjective'
    },
    {
      q: 'What does the phrasal verb "bring about" mean in academic and political texts?',
      opts: ['To carry an object inside', 'To cause or produce a significant change', 'To persuade someone gradually', 'To cancel a scheduled conference'],
      ans: 1,
      exp: '"To bring about" is a transitive phrasal verb meaning to cause, generate, or initiate a major transformation.',
      skill: 'Formal Academic Phrasal Verbs',
      topic: 'Academic Vocabulary',
      sub: 'Causative Phrasal Verbs'
    },
    {
      q: 'Select the sentence that correctly expresses regret about a past action using "wish":',
      opts: [
        'I wish I had accepted that scholarship offer when I had the chance.',
        'I wish I accepted that scholarship offer when I had the chance.',
        'I wish I have accepted that scholarship offer.',
        'I wish I would accept that scholarship offer back then.'
      ],
      ans: 0,
      exp: 'To express regret about an unchangeable past situation, "wish + past perfect" (had accepted) is required.',
      skill: 'Wishes and Regrets in the Past',
      topic: 'Subjunctive and Hypothetical Meaning',
      sub: 'Wish + Past Perfect'
    },
    {
      q: 'Complete with the appropriate preposition: "The technological breakthrough was accomplished ___ the expense of considerable environmental degradation."',
      opts: ['at', 'on', 'in', 'with'],
      ans: 0,
      exp: 'The established idiomatic collocation is "at the expense of", meaning resulting in harm or loss to something else.',
      skill: 'Fixed Prepositional Idioms',
      topic: 'Collocations',
      sub: 'At the expense of'
    },
    {
      q: 'Which word completes the collocation: "The board reached a ___ decision after three hours of intense deliberation"?',
      opts: ['unanimous', 'monumental', 'distinctive', 'solitary'],
      ans: 0,
      exp: 'A "unanimous decision" is an established institutional collocation meaning a decision agreed upon by all members without exception.',
      skill: 'Formal Collocations',
      topic: 'Academic Vocabulary',
      sub: 'Institutional Collocations'
    },
    {
      q: 'Choose the correct punctuation and conjunction to link two closely related independent clauses expressing cause without a semicolon:',
      opts: [
        'The expedition was postponed, for the weather conditions had deteriorated rapidly.',
        'The expedition was postponed, because the weather conditions had deteriorated rapidly, therefore.',
        'The expedition was postponed for the weather had, deteriorated.',
        'The expedition was postponed; for the weather had deteriorated.'
      ],
      ans: 0,
      exp: 'In literary English, the coordinating conjunction "for" preceded by a comma links two independent clauses and provides the reason or explanation.',
      skill: 'Coordinating Conjunctions in Complex Prose',
      topic: 'Punctuation and Syntax',
      sub: 'Coordinating Conjunction For'
    }
  ];

  bacRaw.forEach((item, idx) => {
    items.push({
      id: `ing-bac-${idx + 1}`,
      sectionId: 8,
      number: 40 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Intermedio',
      educationalLevel: 'Bachillerato',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Técnico
  const tecRaw = [
    {
      q: 'In software engineering documentation, what does the acronym API stand for?',
      opts: [
        'Application Programming Interface',
        'Automated Protocol Integration',
        'Algorithmic Processing Instruction',
        'Advanced Peripheral Interconnect'
      ],
      ans: 0,
      exp: 'An Application Programming Interface (API) is a formal set of protocols and subroutine definitions enabling distinct software programs to interact.',
      skill: 'Technical IT Acronyms and Architecture',
      topic: 'Computer Science English',
      sub: 'Software Engineering Terminology'
    },
    {
      q: 'In electrical safety schematics, which term describes an intentional conductive path that safely disperses stray currents into the earth?',
      opts: ['Short circuit', 'Grounding (or earthing)', 'Impedance matching', 'Thermal runaway'],
      ans: 1,
      exp: 'Grounding (earthing) provides an alternate physical path for fault currents directly into the ground, triggering protective circuit breakers.',
      skill: 'Electrical Engineering Vocabulary',
      topic: 'Technical English',
      sub: 'Safety and Earthing'
    },
    {
      q: 'In manufacturing quality control, what does the acronym QA/QC stand for?',
      opts: [
        'Quality Assurance and Quality Control',
        'Quantitative Analysis and Qualitative Calculation',
        'Quarterly Assessment and Quick Correction',
        'Query Automation and Queue Command'
      ],
      ans: 0,
      exp: 'Quality Assurance (QA) focuses on defect prevention in the process, while Quality Control (QC) focuses on detecting defects in the final product.',
      skill: 'Industrial Quality Management',
      topic: 'Manufacturing Terminology',
      sub: 'QA and QC'
    },
    {
      q: 'In networking and telecommunications, what is "latency"?',
      opts: [
        'The maximum volume of data transmitted per second',
        'The time delay required for a data packet to travel from its source to its destination across a network',
        'The physical strength of optical cables',
        'The cryptographic encryption standard'
      ],
      ans: 1,
      exp: 'Latency refers to propagation and processing delays in data transmission, typically measured in milliseconds (ms).',
      skill: 'Data Communications Terminology',
      topic: 'Networking',
      sub: 'Network Performance Metrics'
    },
    {
      q: 'Which verb is used in technical manuals to indicate taking a mechanical assembly apart into its individual components?',
      opts: ['To dismantle (or disassemble)', 'To assemble', 'To calibrate', 'To solder'],
      ans: 0,
      exp: '"To disassemble" or "to dismantle" means to separate an apparatus or machine into its constituent parts for inspection or maintenance.',
      skill: 'Maintenance Technical Verbs',
      topic: 'Mechanical Engineering English',
      sub: 'Assembly and Disassembly'
    },
    {
      q: 'In industrial safety datasheets (SDS), what does the warning "PPE required" mean for technicians?',
      opts: [
        'Personal Protective Equipment (such as helmets, goggles, and gloves) must be worn',
        'Permanent Power Enabled',
        'Pre-Production Evaluation completed',
        'Product Performance Examination'
      ],
      ans: 0,
      exp: 'Personal Protective Equipment (PPE) encompasses specialized safety gear designed to shield workers against physical, chemical, or electrical hazards.',
      skill: 'Occupational Health and Safety Standards',
      topic: 'Industrial Safety',
      sub: 'PPE Requirements'
    },
    {
      q: 'In computer programming, what is a "deadlock"?',
      opts: [
        'A high-speed cryptographic algorithm',
        'A state in which two or more concurrent processes are unable to proceed because each is waiting for the other to release a shared resource',
        'An unplugged Ethernet cable',
        'A syntax error in compiling code'
      ],
      ans: 1,
      exp: 'A deadlock occurs in concurrent computing when processes enter circular wait conditions holding exclusive resource locks.',
      skill: 'Concurrent Computing Terminology',
      topic: 'Operating Systems English',
      sub: 'Concurrency and Deadlocks'
    },
    {
      q: 'In technical specifications, what does "tolerance" refer to when machining a precision steel cylinder?',
      opts: [
        'The total weight of the cylinder',
        'The permissible limit or allowable variation in a physical dimension or property',
        'The thermal conductivity coefficient',
        'The tensile fracture point'
      ],
      ans: 1,
      exp: 'Engineering tolerance specifies the allowable deviation (e.g. ±0.02 mm) from a nominal dimension to guarantee interchangeability.',
      skill: 'Metrology and Machining Tolerances',
      topic: 'Mechanical Engineering',
      sub: 'Geometric Dimensioning and Tolerancing'
    },
    {
      q: 'In database management systems (DBMS), what does the acronym ACID stand for regarding transactional integrity?',
      opts: [
        'Atomicity, Consistency, Isolation, Durability',
        'Automated Client Interface Design',
        'Active Cache Indexed Database',
        'Asynchronous Component Integration Directive'
      ],
      ans: 0,
      exp: 'ACID guarantees that database transactions are processed reliably, preserving database integrity even in the event of system crashes.',
      skill: 'Database Architecture Vocabulary',
      topic: 'Information Systems',
      sub: 'ACID Properties'
    },
    {
      q: 'Which technical adjective describes a system or component that continues operating without interruption when one of its sub-elements fails?',
      opts: ['Fault-tolerant', 'Volatile', 'Aqueous', 'Corrosive'],
      ans: 0,
      exp: 'A fault-tolerant system is designed with hardware or software redundancy to sustain continuous availability despite internal subsystem failures.',
      skill: 'System Reliability Engineering',
      topic: 'Systems Engineering',
      sub: 'Fault Tolerance'
    },
    {
      q: 'In telecommunications, what does "bandwidth" designate?',
      opts: [
        'The physical thickness of a coaxial cable',
        'The maximum rate of data transfer across a given path or frequency spectrum per unit of time',
        'The weight of a radio antenna',
        'The acoustic volume of a speaker'
      ],
      ans: 1,
      exp: 'Bandwidth denotes the data capacity of a channel, expressed in Hertz for analog signals or bits per second (bps) for digital streams.',
      skill: 'Telecommunications Terminology',
      topic: 'Network Architecture',
      sub: 'Channel Bandwidth'
    },
    {
      q: 'In electronics, what is the role of a "rectifier"?',
      opts: [
        'To convert alternating current (AC) into direct current (DC)',
        'To amplify radio signals',
        'To store electrostatic charge',
        'To cool down microprocessors'
      ],
      ans: 0,
      exp: 'A rectifier uses diodes (e.g., in bridge configuration) to allow unidirectional current flow, transforming alternating voltage into pulsating direct voltage.',
      skill: 'Electronic Circuit Components',
      topic: 'Electronics Engineering',
      sub: 'Rectification Circuits'
    },
    {
      q: 'What does the term "bottleneck" signify when analyzing industrial assembly line throughput?',
      opts: [
        'A bottle storage area',
        'A stage in the process whose limited capacity restricts the total operational output of the entire system',
        'An automated packaging conveyor',
        'A quality certificate'
      ],
      ans: 1,
      exp: 'In operations research, a bottleneck is the slowest workstation that dictates the cycle time and maximum production capacity of a line.',
      skill: 'Industrial Operations and Throughput',
      topic: 'Operations Management',
      sub: 'Bottleneck Analysis'
    },
    {
      q: 'In heating, ventilation, and air conditioning (HVAC), what does the acronym HVAC stand for?',
      opts: [
        'Heating, Ventilation, and Air Conditioning',
        'High Voltage Alternating Current',
        'Hydraulic Valve Automated Controller',
        'Heavy Vehicle Air Compressor'
      ],
      ans: 0,
      exp: 'HVAC systems regulate indoor environmental conditions, thermal comfort, and air filtration in residential and industrial facilities.',
      skill: 'HVAC Technical English',
      topic: 'Building Services Engineering',
      sub: 'HVAC Systems'
    },
    {
      q: 'In cyber security, what is a "phishing" attack?',
      opts: [
        'A hardware failure in network switches',
        'A social engineering deception where attackers masquerade as trustworthy entities to trick users into revealing sensitive credentials',
        'A routine antivirus update',
        'A data compression protocol'
      ],
      ans: 1,
      exp: 'Phishing exploits psychological manipulation via fraudulent emails, spoofed domains, or messages to obtain passwords or banking details.',
      skill: 'Cybersecurity Vocabulary',
      topic: 'Information Security',
      sub: 'Social Engineering'
    },
    {
      q: 'In material science, what property is tested by measuring a material\'s ability to resist indentation or surface scratching?',
      opts: ['Hardness', 'Ductility', 'Thermal expansion', 'Electrical resistivity'],
      ans: 0,
      exp: 'Hardness (tested via Rockwell, Brinell, or Vickers scales) quantifies mechanical resistance to localized plastic deformation.',
      skill: 'Materials Testing Terminology',
      topic: 'Materials Science',
      sub: 'Mechanical Hardness'
    },
    {
      q: 'In automotive engineering, what is the function of the ECU?',
      opts: [
        'Engine Control Unit (electronic microprocessor that controls engine actuators and fuel injection timing)',
        'Emergency Cooling Utility',
        'Electrical Current Unleasher',
        'Exhaust Cleaning Valve'
      ],
      ans: 0,
      exp: 'The ECU processes real-time sensor feedback (MAF, O₂, RPM) to compute optimal fuel injection duration and ignition timing.',
      skill: 'Automotive Electronics Technical English',
      topic: 'Automotive Engineering',
      sub: 'Engine Control Units'
    },
    {
      q: 'In software development workflows, what does "continuous integration" (CI) entail?',
      opts: [
        'Frequently merging code changes from all developers into a shared central repository accompanied by automated building and testing',
        'Never releasing updates to users',
        'Writing documentation on paper',
        'Manually inspecting every line of code without automation'
      ],
      ans: 0,
      exp: 'Continuous Integration automates code compilation, unit testing, and linting upon each commit to catch regressions immediately.',
      skill: 'DevOps and Software Engineering Practices',
      topic: 'DevOps Terminology',
      sub: 'Continuous Integration'
    },
    {
      q: 'What is a "heatsink" in electronic hardware assemblies?',
      opts: [
        'A passive heat exchanger that dissipates thermal energy away from high-power electronic components into the surrounding air',
        'A water reservoir for boilers',
        'A high-voltage fuse',
        'An insulating rubber gasket'
      ],
      ans: 0,
      exp: 'Heatsinks feature thermal conductive metals (aluminum or copper) with extended fin geometries to enhance convective heat dissipation.',
      skill: 'Thermal Management in Electronics',
      topic: 'Hardware Engineering',
      sub: 'Heatsinks and Thermal Interfaces'
    },
    {
      q: 'In project management, what does the term "milestone" represent?',
      opts: [
        'A physical stone marking highway distances',
        'A significant scheduled point or achievement marking the completion of a major phase or deliverable in a project',
        'The total cost of building materials',
        'A daily coffee break'
      ],
      ans: 1,
      exp: 'In Gantt charts and project planning, a milestone is a zero-duration event that marks the completion of a key deliverable or stage.',
      skill: 'Technical Project Management',
      topic: 'Project Engineering',
      sub: 'Project Milestones'
    }
  ];

  tecRaw.forEach((item, idx) => {
    items.push({
      id: `ing-tec-${idx + 1}`,
      sectionId: 8,
      number: 60 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Técnico',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  // 20 Universitario
  const uniRaw = [
    {
      q: 'In formal linguistics, what does the Sapir-Whorf Hypothesis (linguistic relativity) postulate regarding the interface between language and cognition?',
      opts: [
        'That all human languages share an innate Universal Grammar hardwired into the cerebral cortex',
        'That the semantic structure and lexical categories of a particular language influence or determine the cognitive perceptions and worldviews of its native speakers',
        'That language acquisition is governed strictly by behavioral Skinnerian reinforcement',
        'That writing systems precede oral phonology in evolutionary time'
      ],
      ans: 1,
      exp: 'The principle of linguistic relativity posits that differences in linguistic encodings of space, time, or color categorize mental representations and affect cognitive habits.',
      skill: 'Linguistic Relativity and Sociolinguistics',
      topic: 'Theoretical Linguistics',
      sub: 'Sapir-Whorf Hypothesis'
    },
    {
      q: 'In literary theory, what critical concept coined by Mikhail Bakhtin denotes the coexistence of multiple distinct voices, perspectives, and sociolinguistic registers within a novelistic narrative without being subordinated to a monologic authorial voice?',
      opts: ['Polyphony (or heteroglossia)', 'Intentional fallacy', 'Structuralist synchronic closure', 'Objective correlative'],
      ans: 0,
      exp: 'Bakhtin formulated "polyphony" in his analysis of Dostoevsky to describe novels composed of independent, unmerged voices engaged in continuous dialogism.',
      skill: 'Narratology and Literary Criticism',
      topic: 'Literary Theory',
      sub: 'Bakhtinian Dialogism and Polyphony'
    },
    {
      q: 'In English generative syntax, what does the X-bar theory (X̄ theory) formulate regarding universal phrase structure across natural languages?',
      opts: [
        'That all phrases across syntactic categories share a hierarchical tripartite template consisting of a specifier, intermediate X-bar projection, and a lexical head with its complement',
        'That adjectives always follow nouns in deep structure',
        'That verbs cannot assign theta-roles to arguments',
        'That language consists exclusively of linear word strings without hierarchical branching'
      ],
      ans: 0,
      exp: 'X-bar theory within Chomskyan generative grammar models uniform structural representations for NP, VP, AP, and PP via recursive binary branching projections [XP → Spec, X\'; X\' → X, Comp].',
      skill: 'Generative Syntax and Phrase Structure',
      topic: 'Theoretical Syntax',
      sub: 'X-Bar Theory'
    },
    {
      q: 'In historical linguistics, what systematic series of phonological vowel shifts occurred in Middle to Early Modern English (15th–18th centuries) where all long vowels raised in articulation or diphthongized?',
      opts: ['Grimm\'s Law', 'The Great Vowel Shift', 'Verner\'s Law', 'The High German Consonant Shift'],
      ans: 1,
      exp: 'The Great Vowel Shift transformed the phonological system of English long vowels (e.g. /iː/ became /aɪ/ as in "time", /uː/ became /aʊ/ as in "house"), explaining modern spelling-pronunciation discrepancies.',
      skill: 'Historical Phonology of the English Language',
      topic: 'History of the English Language',
      sub: 'The Great Vowel Shift'
    },
    {
      q: 'In academic discourse and epistemological rhetoric, what is "hedging"?',
      opts: [
        'Using assertive dogmatic assertions to silence academic opposition',
        'Employing cautious, tentative language (such as modal verbs, adverbs like "presumably", or qualifiers) to modulate the certitude and scope of scientific claims and avoid absolute overgeneralization',
        'Translating texts into rhyming verse',
        'Plagiarizing secondary literature'
      ],
      ans: 1,
      exp: 'Hedging devices (e.g. "evidence suggests that", "may indicate", "arguably") allow researchers to express epistemic modesty and protect claims against outright falsification.',
      skill: 'Epistemic Modality and Academic Hedging',
      topic: 'Academic Writing and Rhetoric',
      sub: 'Hedging in Research Papers'
    },
    {
      q: 'In postcolonial literary studies, what critical term articulated by Homi K. Bhabha describes the ambivalent strategy where colonized subjects imitate the culture, language, and manners of the colonizer, producing a resemblance that is "almost the same, but not quite"?',
      opts: ['Orientalist essentialism', 'Colonial mimicry', 'Subaltern silence', 'Binary opposition'],
      ans: 1,
      exp: 'Bhabha argued that colonial mimicry disrupts colonial authority from within: by imitating the imperial master, the colonized subject produces an ironic mockery that exposes the fissures of colonial hegemony.',
      skill: 'Postcolonial Theory and Discourse Analysis',
      topic: 'Postcolonial Studies',
      sub: 'Mimicry and Hybridity in Bhabha'
    },
    {
      q: 'In semantics and philosophy of language, what fundamental distinction did Gottlob Frege establish in 1892 regarding the meaning of expressions (such as "the morning star" and "the evening star")?',
      opts: [
        'The distinction between Sense (Sinn) and Reference (Bedeutung)',
        'The distinction between signifier and signified',
        'The distinction between performance and competence',
        'The distinction between langue and parole'
      ],
      ans: 0,
      exp: 'Frege demonstrated that while "the morning star" and "the evening star" share the same referent (the planet Venus), they possess distinct senses (modes of presentation), explaining why identity statements can be informative.',
      skill: 'Philosophy of Language and Formal Semantics',
      topic: 'Semantics',
      sub: 'Fregean Sense and Reference'
    },
    {
      q: 'In pragmatics, what four conversational maxims did H.P. Grice identify as underlying the overarching Cooperative Principle in rational human discourse?',
      opts: [
        'Maxims of Quantity, Quality, Relation, and Manner',
        'Maxims of Form, Substance, Purity, and Elegance',
        'Maxims of Speed, Volume, Pitch, and Tone',
        'Maxims of Emotion, Logic, Rhetoric, and Ethos'
      ],
      ans: 0,
      exp: 'Grice\'s Cooperative Principle posits that interlocutors assume contributions are as informative as required (Quantity), truthful (Quality), relevant (Relation), and clear/orderly (Manner).',
      skill: 'Pragmatics and Conversational Implicature',
      topic: 'Pragmatics',
      sub: 'Gricean Maxims'
    },
    {
      q: 'In the poetry of the English Renaissance, what verse form consists of unrhymed lines of iambic pentameter, utilized extensively by William Shakespeare and John Milton?',
      opts: ['Alexandrine stanza', 'Blank verse', 'Heroic couplet', 'Spenserian stanza'],
      ans: 1,
      exp: 'Blank verse features ten syllables per line arranged in five unstressed-stressed metric feet (da-DUM da-DUM da-DUM da-DUM da-DUM) without end rhyme, providing solemn rhythmic flexibility.',
      skill: 'English Poetics and Versification',
      topic: 'Renaissance Literature',
      sub: 'Blank Verse and Iambic Pentameter'
    },
    {
      q: 'In systemic functional linguistics (SFL) developed by M.A.K. Halliday, what three overarching metafunctions of language operate simultaneously in every communicative text?',
      opts: [
        'Ideational, Interpersonal, and Textual metafunctions',
        'Phonetic, Morphological, and Syntactic levels',
        'Literal, Allegorical, and Moral senses',
        'Nominal, Verbal, and Adjectival domains'
      ],
      ans: 0,
      exp: 'Halliday posited that language concurrently encodes experiences of the external world (ideational), enacts social relationships and speaker attitudes (interpersonal), and creates cohesive flow (textual).',
      skill: 'Systemic Functional Linguistics (SFL)',
      topic: 'Functional Grammar',
      sub: 'Hallidayan Metafunctions'
    },
    {
      q: 'In corpus linguistics, what statistical measure quantifies the strength of lexical association between two co-occurring words compared to their chance frequency across a vast text corpus?',
      opts: ['Mutual Information (MI score) and T-score', 'Standard deviation exclusively', 'Levenshtein edit distance', 'Word count percentage'],
      ans: 0,
      exp: 'The Mutual Information score (MI) evaluates whether two collocations (e.g. "commit suicide", "stark naked") co-occur with probability significantly higher than random statistical expectation.',
      skill: 'Corpus Linguistics and Collocational Analysis',
      topic: 'Applied Linguistics',
      sub: 'Collocation Metrics in Corpora'
    },
    {
      q: 'In deconstructionist literary philosophy articulated by Jacques Derrida, what neologism denotes the concept that words can never achieve final presence of meaning, because meaning is both continually differing and indefinitely deferred along an endless chain of signifiers?',
      opts: ['Différance', 'Aporia', 'Logocentrism', 'Episteme'],
      ans: 0,
      exp: 'Derrida\'s différance (combining the French verbs différer: to differ and to defer) destabilizes structuralist claims to fixed foundational signifieds.',
      skill: 'Deconstruction and Post-Structuralism',
      topic: 'Critical Theory',
      sub: 'Derridean Différance'
    },
    {
      q: 'In phonetics and phonology, what acoustic phenomenon occurs when a vocalic or consonantal sound is modified in articulation to become more phonetically similar to a neighboring segment (such as "in-put" pronounced as [ˈɪmpʊt])?',
      opts: ['Assimilation', 'Dissimilation', 'Metathesis', 'Epenthesis'],
      ans: 0,
      exp: 'Anticipatory regressive assimilation causes the alveolar nasal /n/ to assimilate to the bilabial place of articulation of the following /p/, yielding the bilabial nasal [m].',
      skill: 'Phonological Processes and Coarticulation',
      topic: 'Phonology',
      sub: 'Assimilation'
    },
    {
      q: 'In English morphology, what morphological process creates the words "brunch" (breakfast + lunch) and "smog" (smoke + fog)?',
      opts: ['Blending (portmanteau words)', 'Clipping', 'Back-formation', 'Conversion (zero derivation)'],
      ans: 0,
      exp: 'Blending fuses the non-morphemic parts of two words together, typically taking the onset of the first and the rime/coda of the second.',
      skill: 'Word-Formation Processes in English',
      topic: 'Morphology',
      sub: 'Blending and Portmanteaus'
    },
    {
      q: 'In translation studies, what concept formulated by Lawrence Venuti critiques the Anglo-American publishing tradition of producing transparent, fluent translations that erase the cultural and linguistic strangeness of the foreign source text?',
      opts: ['Domestication (vs. Foreignization)', 'Dynamic equivalence', 'Skopos theory', 'Transcreation'],
      ans: 0,
      exp: 'Venuti advocated foreignizing translation strategies to resist ethnocentric domestication, allowing the target reader to experience the linguistic otherness of the original author.',
      skill: 'Translation Theory and Cultural Studies',
      topic: 'Translation Studies',
      sub: 'Domestication vs Foreignization'
    },
    {
      q: 'In psycholinguistics, what clinical condition characterized by fluent but grammatically distorted speech and impaired auditory comprehension results from focal lesions in the posterior superior temporal gyrus of the left cerebral hemisphere?',
      opts: ['Broca\'s aphasia', 'Wernicke\'s aphasia (receptive aphasia)', 'Conduction aphasia', 'Global apraxia'],
      ans: 1,
      exp: 'Wernicke\'s aphasia involves fluent, effortless speech that lacks semantic coherence (word salad and neologisms) paired with severe comprehension deficits.',
      skill: 'Neurolinguistics and Language Pathology',
      topic: 'Psycholinguistics',
      sub: 'Wernicke\'s Aphasia'
    },
    {
      q: 'In literary Modernism, what narrative technique popularized by James Joyce and Virginia Woolf attempts to render the continuous, unedited, nonlinear flow of interior thoughts, sensory impressions, and memories in a character\'s mind?',
      opts: ['Stream of consciousness', 'Dramatic monologue', 'Omniscient third-person moralizing', 'Allegorical framing'],
      ans: 0,
      exp: 'Stream of consciousness breaks conventional syntactical and chronological conventions to mimic associative cognitive processing in real time.',
      skill: 'Modernist Narrative Techniques',
      topic: '20th Century English Literature',
      sub: 'Stream of Consciousness'
    },
    {
      q: 'In speech act theory established by J.L. Austin and John Searle, what dimension of an utterance represents the actual consequential effect produced upon the feelings, thoughts, or actions of the hearer (such as persuasion, intimidation, or amusement)?',
      opts: ['Locutionary act', 'Illocutionary force', 'Perlocutionary effect', 'Performative utterance'],
      ans: 2,
      exp: 'Austin dissected speech acts into: locution (the literal utterance), illocution (the intended conventional act: promising, ordering), and perlocution (the psychological/behavioral effect realized in the hearer).',
      skill: 'Speech Act Theory and Austinian Pragmatics',
      topic: 'Pragmatics and Language Philosophy',
      sub: 'Perlocutionary Effects'
    },
    {
      q: 'In historical sociolinguistics, what prestigious dialect of Early Modern London English, championed by William Caxton\'s printing press and bureaucratic chancery, served as the primary foundation for Standard Modern English?',
      opts: ['Northumbrian Old English', 'Chancery Standard (East Midlands dialect)', 'Wessex West Saxon dialect', 'Cornish Celtic dialect'],
      ans: 1,
      exp: 'Chancery Standard, established by civil clerks of the court in Westminster and disseminated by Caxton\'s printing presses, homogenized regional orthography and morphology into standard literary English.',
      skill: 'Standardization of the English Language',
      topic: 'History of English',
      sub: 'Chancery Standard'
    },
    {
      q: 'In cognitive linguistics pioneered by George Lakoff and Mark Johnson, what theoretical framework demonstrates that everyday conceptual reasoning is grounded in embodied physical metaphors (such as "ARGUMENT IS WAR" or "TIME IS MONEY")?',
      opts: ['Conceptual Metaphor Theory (CMT)', 'Generative Phonology', 'Behaviorist Conditioning', 'Logical Positivism'],
      ans: 0,
      exp: 'Lakoff and Johnson demonstrated in "Metaphors We Live By" that metaphors are not mere poetic ornaments, but foundational cognitive mappings from concrete sensorimotor source domains to abstract target domains.',
      skill: 'Cognitive Linguistics and Embodied Cognition',
      topic: 'Cognitive Semantics',
      sub: 'Conceptual Metaphor Theory'
    }
  ];

  uniRaw.forEach((item, idx) => {
    items.push({
      id: `ing-uni-${idx + 1}`,
      sectionId: 8,
      number: 80 + idx + 1,
      text: item.q,
      options: item.opts,
      correctIndex: item.ans,
      explanation: item.exp,
      skill: item.skill,
      difficulty: 'Desafiante',
      educationalLevel: 'Universitario',
      topic: item.topic,
      subtopic: item.sub
    });
  });

  writeSubjectFile('ingles.ts', 'QUESTIONS_INGLES', 'Inglés', items);
}

makeIngles();
