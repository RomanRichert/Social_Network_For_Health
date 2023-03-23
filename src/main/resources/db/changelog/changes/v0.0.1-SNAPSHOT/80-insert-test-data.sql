INSERT INTO stories (id, age, description, body_part, health_score, bmi)
VALUES ('97d99924-c99f-11ed-afa1-0242ac120002', 34,
        'I had been suffering with back problems for a year. I did not like swimming, but regular yoga classes helped',
        8, 56.34, 31.67),
       ('97d99b36-c99f-11ed-afa1-0242ac120002', 33,
        'I have been suffering from back pain for three years. Nothing has helped', 8, 53.34, 35.67),
       ('97d99c4e-c99f-11ed-afa1-0242ac120002', 32,
        'I have tried treating my back pain with running, but I hate running. Swimming saved me', 8, 44.34, 31.67),
       ('97d99d52-c99f-11ed-afa1-0242ac120002', 45, '', 0, 43.34, 23.67),
       ('97d9a07c-c99f-11ed-afa1-0242ac120002', 46,
        'Crazy migraines started after the birth of the baby. Yoga turned out to be boring and running was wonderful',
        0, 66.34, 25.67),
       ('97d9a176-c99f-11ed-afa1-0242ac120002', 47, 'I am a fan of running. The headaches have stopped', 0, 65.34,
        24.67),
       ('97d9a27a-c99f-11ed-afa1-0242ac120002', 66, 'Very sore lower back. Do not know what to do to save myself ', 9,
        78.34, 33.67),
       ('97d9a3a6-c99f-11ed-afa1-0242ac120002', 67,
        'Yoga is the best thing that ever happened to me! My back feels like it is been reborn', 9, 77.34, 32.67),
       ('97d9a4be-c99f-11ed-afa1-0242ac120002', 66,
        'The work caused constant pain in my right arm. Tried yoga and swimming, did not like it. ', 4, 56.34, 30.67),
       ('97d9a5cc-c99f-11ed-afa1-0242ac120002', 34,
        'I love yoga. It is a magic remedy that always helps with back pain! ', 8, 52.34, 28.67);

INSERT INTO therapies (id, name, description, smiley, story_id)
VALUES ('e91b6fe2-c99f-11ed-afa1-0242ac120002', 'Running', 'fdfsdff', 0, '97d99924-c99f-11ed-afa1-0242ac120002'),
       ('e91b72bc-c99f-11ed-afa1-0242ac120002', 'Yoga', 'gdsgsgrs', 2, '97d99b36-c99f-11ed-afa1-0242ac120002'),
       ('e91b747e-c99f-11ed-afa1-0242ac120002', 'Swimming', 'sfqefe', 1, '97d99c4e-c99f-11ed-afa1-0242ac120002');