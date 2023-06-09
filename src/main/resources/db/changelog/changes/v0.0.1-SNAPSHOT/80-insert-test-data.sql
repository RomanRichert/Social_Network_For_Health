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
VALUES ('e91b6fe2-c99f-11ed-afa1-0242ac120002', 'Running', null, 0, '97d99b36-c99f-11ed-afa1-0242ac120002'),
       ('e91b72bc-c99f-11ed-afa1-0242ac120002', 'Yoga', null, 1, '97d99924-c99f-11ed-afa1-0242ac120002'),
       ('e91b747e-c99f-11ed-afa1-0242ac120002', 'Swimming', null, 4, '97d99924-c99f-11ed-afa1-0242ac120002'),
       ('e45c5c61-56af-4908-9507-b768f68cf94c', 'Swimming', null, 0, '97d99b36-c99f-11ed-afa1-0242ac120002'),
       ('bf6812da-7350-4bc6-b6a2-1ea8b6eff03a', 'Yoga', null, 0, '97d99b36-c99f-11ed-afa1-0242ac120002'),
       ('f57d1de8-7b6e-48dc-a5b1-7585faa537f7', 'Running', null, 1, '97d99c4e-c99f-11ed-afa1-0242ac120002'),
       ('519d10c5-4c78-4c3b-bfa9-197d903d158a', 'Swimming', null, 4, '97d99c4e-c99f-11ed-afa1-0242ac120002'),
       ('cb34308f-1885-4aa5-9f1d-ca3736d61f7c', 'Yoga', null, 1, '97d9a07c-c99f-11ed-afa1-0242ac120002'),
       ('c7dc7bed-f9ec-479f-b0f4-9172910da493', 'Running', null, 4, '97d9a07c-c99f-11ed-afa1-0242ac120002'),
       ('62e0ae4b-4e88-4ac0-8e4a-d4570d00907a', 'Running', null, 4, '97d9a176-c99f-11ed-afa1-0242ac120002'),
       ('877b4741-0fa9-4253-a984-86d13f00c1cc', 'Yoga', null, 4, '97d9a3a6-c99f-11ed-afa1-0242ac120002'),
       ('0091f18f-8aae-43df-bc30-5a7db364fe27', 'Yoga', null, 1, '97d9a4be-c99f-11ed-afa1-0242ac120002'),
       ('f8535f3c-8b04-4804-b2bd-36b4e72a20fa', 'Swimming', null, 1, '97d9a4be-c99f-11ed-afa1-0242ac120002'),
       ('38f96340-4519-4536-bdfe-a35e30433fec', 'Yoga', null, 4, '97d9a5cc-c99f-11ed-afa1-0242ac120002')
       ;