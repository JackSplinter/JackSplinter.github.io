
const sample16=new Array;
sample16[1]='2NN4NN6N5N5NN2NNNNNNN1NNN1N2NNN35N3NNNNNNN4NNN4NN2N2N3NNN5NN3NN3NNNNNN3N3NNNNN4NNN1NN6N3N4N1NNNN3NNNNN2NNN3N4NN4N6N3NNN3N3N4NN2N2N2NN4NNNNNN3NN4N4N2NN3N2N1NNN2N3N3NNNNNNNNN1NNNN3N6N3N2N4N8NN5N4N3N3N6N3NNNNNNNN1N3N3N3N3NN1NN2NN1N1N1N3NN4NN1N4NN5N3N1N2NN4NN3';
// wziety BOARD a nie ISLANDS i zle ustawia //sample16[2]='4E3E3EE3EE3E4EE3E2EEEE2EE4E6E3EEEEE2E1E1EEEE1E1E4EEE2E3EE4E4EEE2E4EEEEEEEEEEE1EE3EE4E4EE4E2EEEE3EEEE2EEEE1EE4E4EE6E4EE4E8E6EE2EE2EEE3EEEEEE3EEE3E3EEEE4E4E2EE3EEEEEE2EEEEEEE1EE23E2EE5EE4EE3EE2EEEEEEE4EEE2EE4E2E3E4EEE1E5E4EE1EEEEEE2EEEEEEEEEE4EE9EE6EE6E4E2E2';
sample16[2]='4N3N3NN3NN3N4NN3N2NNNN2NN4N6N3NNNNN2N1N1NNNN1N1N4NNN2N3NN4N4NNN2N4NNNNNNNNNNN1NN3NN4N4NN4N2NNNN3NNNN2NNNN1NN4N4NN6N4NN4N8N6NN2NN2NNN3NNNNNN3NNN3N3NNNN4N4N2NN3NNNNNN2NNNNNNN1NN23N2NN5NN4NN3NN2NNNNNNN4NNN2NN4N2N3N4NNN1N5N4NN1NNNNNN2NNNNNNNNNN4NN6NN6NN6N4N2N2';
sample16[3]='2N4N4N5NNN2N3N3NNNNNN2NN3NN3N2N14N8N3N4NNNNN2N4NNNN2N6N2N2N4N3N33N4N1N2N2NNNNN4NNNNNN4N8N3NN2NN3N3N1NNNNNNN3NN4NNN2NN3N6N2NNN3N3N3NN2N4N3NN4NN3N2NN2NNN2N3NNN3N3NN2N4N4N2NN3NNNN2NN1NNNNNNNN1N2NN3NNN1N3N6N5N2NN3N1NNNNNNNNNNNN3N3NN4N2N2N2N2N2N4NN3N2NNN3NNN4N4';
const solution16=new Array;
solution16[1]='2tt4ff6f5t5ff2EEiEEiE1hEh1h2fff35f3iEihEhi4fff4ih2i2E3hEh5ff3Eh3hhiiEh3t3hEEiE4hhh1iE6f3t4t1iEhh3hEiEh2ttt3f4Eh4i6f3Ehi3t3f4iE2h2h2tt4ihEEEh3tt4i4i2Ei3h2t1hiE2i3h3hEihhiEEh1Ehih3h6f3h2i4f8ff5i4i3h3f6f3hEhEEiih1i3i3f3t3Eh1Ei2hE1i1i1t3ff4iE1i4ff5f3E1t2tt4ff3';
solution16[2]='4f3t3tt3tt3f4ff3h2EEiE2iE4f6f3EihhE2i1h1EhEh1i1i4hEh2i3tt4E4iii2h4EhiiEEEiEhi1ii3hE4i4ff4i2hiEi3ihEh2iEEh1hh4f4hi6f4ii4f8f6hi2ih2hEE3ihEhEh3ihi3i3EEhi4E4E2ii3iiiiEE2ihEhEEi1ii23i2ff5hE4ff3Ei2ihiEEEh4EEE2ff4i2h3f4Ehh1t5f4Ei1ihEEhE2hEEhEhEiEi4ff6ff6ff6f4E2t2';
solution16[3]='2t4t4f5ttt2t3t3EiEhEi2hE3tt3i2h14f8f3h4EhEEh2h4iiEh2f6h2h2t4i3h33t4t1h2h2iEiii4hiEEEE4f8f3Ei2ih3i3t1EEEhEEE3ii4iih2tt3f6f2Ehi3h3i3iE2f4f3tt4ih3h2ii2ttt2t3Eii3i3ii2i4f4f2hE3iiii2ii1hEEEEhEh1i2ii3iEh1t3f6f5t2ii3h1EhEEEEEEEEEi3h3tt4t2t2t2t2t2h4ff3t2ttt3fff4f4';
	
const sample25=new Array;
sample25[1]='4N4N3N4NNNN2N3NN6N5NN3N2NN4NNN2N2NN6N3NN1NNN1NNNN24NN2NN6NN2N1NN3N6N5NN3N2NN3NNNNNN3N6NN4N3NNNN3N4N46N3N2NN2N2N2NN2NNN2NN3N2NN2N3NN2NNNNN2NNN2NN2NN2N44NNNN3N4N6N6NN3NN2NNN3NNNN2NN3NNN2NNNN2NN6N4N2N2N63NN2NNN1N2NNNNNNN2N4N6N2NN2NNN3NN4NN6N3NN4NNN2N3N63N4NNNNNNN3N4N3NNN2NN2N1NNNNN3NN2N2NNN2NN2NN2NN5N6NN4NN1NNNNN2NN2NN2NN1NNNN3NNN3NN2N2NN2NN2NNNNN1NN3NN4NNN3NNN2NNN3N3N2N3N6NN6NNNNNNN3NN2NNNNNNN1NNNN3NNN1N2N3N3NNN2N3N3NN3N4NNN2NNNNNNNNN3NN3NNN2NN3NN63N2N4N6NN3NNN2NN2NN2NNN1NNNNNNNN1NN2NNNN2NNNNN2NN5N4NN3N8NNNN3NN3NN6NN6NN4NNNN3N2NN3NNN2NNN1NNNNN2N43NNNNNNNNN1NNNN3N8N2NNN2NN2NN2N6N6NNN3NNN1N2N6N4NN4NN4NNN2NNN2NNN2N4NNN3NN4';
sample25[2]='4N6N5N4N4N6N3N3N6N6N6N6N3NNNNN2N2N2N2N3N2N1N2N1N2N6N8N6N2NNN4NNNNN4NNN3N4N3NNN1N6N6NNNN1N1NNN3NNNNNN6N4N3NNNN3NNN2NN2NN3N2N3NNNNNNNN3NNN3NNN3N3NNNNNNN5NN2N3NNN2NNNN3N4N3N3N4N4N2NN2NNN2N3NN5N6N3N2N2NNN4NNNNNNNN3N4NNNNNN2N3NN3NN4N4N3N1NN2NN6N8N4N3NN4NNNN4NNNNN4NN3NNNNNNNN3NN3NNNNN2NN2NN3NN6N6N3N3N2NNN4N2NNNNNN3NN2NNNNNNN4N4N4NNNN3N4NNN4NNNN4NN6NNNN2NN3N4N4N3N2N2NNNNNNN3NN3NN6NNN2N2N1NNNNNNN4N5NN2NN4NN2NNNNNN3N2N4N6N2NN2NN2NNNN4N8N6NNNN3N3N3NN6N3NN34N4NNNNNNN4NN1NNN4NNNN1NNNNN6N6N8N6N3NNN4NN1N4NN4N6N5N3N3NNN3NN2NN1NNNNNNN3NNN4N2N4N6N4NNN6N8N4N2N4N4N2N1N3N4N1NNNNNNNNN6N4N4NNN4N4NNN4N5N2N2NNNNNNN1N4N5N4N3N5N3N3N4NN5NN6N6N4';
sample25[3]='2N4NN6N3NNN1NN2N2NN4N4N4NNNN1NNNNNNNNNNNNNNNN1N2NN6N6NN5NNN4NN6N5NNNNNNNN2NNNNN1N3N3NNNNNNN4NN8NN5N4NNNNNNNNN4NN4NNNNNNN3NN2N4N6NN2NN2NNNNNNN3N2NNN4N4NNNN3N6NN3NN3N4NNNN4N1NNNNNN2NNNNNNN3N4NN6NNNNN3N34N5NN2NNN1NNNNNNNNN2N3N1NN1NN2NNN3NN6N4N2NNNNNN4N46N4NN3N6N2NN2NNN5N4NNNNNNNNN2NN3N1NN4NNNNNNNN3N6N26N3NNNN3NN2N4N2N3NN2NNNNNNNNN2N4NNNNNNNNNNNNNNN4N4NNN3N4N4NN4NNN2N8N4NNNNNN6N4NNN2N2NNNNNNNNNNNN3NN5N2NNNNNNNNNN6NNN7N4NNNNNNNN2NNNNN3N4NNNNNN2N2NN4N44NNNN2N2NNNNNN2N4NNNNNNNNNNN2NN5N6N4N3NN2NNN1NN4N3N4NN3NNNNNN2NNNN3NNN2NNNNNNN3NNNN2NNN4NN4N2N4N2N1N4N4N2NN4N6N3N3NN6N2N4N2N2NNN3NNNN1NNN2NN4NNN4NNNNNNN4NN4NNN6N2NNNNN2NN6NN2N';
const solution25=new Array;
solution25[1]='4f4f3t4tttt2t3ff6f5tt3f2Eh4fff2h2ff6f3tt1hEh1tttt24hE2ff6ff2h1tt3f6f5tt3f2ih3tttttt3f6ff4f3tttt3f4f46f3t2tt2t2t2tt2ttt2tt3f2ih2f3tt2ttttt2ttt2tt2tt2t44tttt3f4f6f6ff3tt2ttt3EEhi2ff3ttt2hEhE2ff6f4f2h2f63tt2ttt1i2EhEEEEh2f4f6f2hi2fff3tt4ff6f3tt4ttt2t3f63t4ttttttt3f4f3ttt2tt2t1hiEhE3tt2t2ttt2tt2tt2tt5f6iE4Eh1ttttt2tt2tt2tt1EhEh3EhE3tt2t2tt2tt2ttttt1hE3hE4fff3ttt2ttt3f3t2t3f6Ei6fffffff3tt2ttttttt1EEhE3hEE1t2t3f3ttt2t3f3tt3f4Ehh2ttttttttt3ff3ttt2tt3ff63i2f4f6ff3ttt2tt2tt2ttt1hiiEEEEh1tt2tttt2ttttt2tt5i4tt3f8ffff3tt3ff6ff6ff4hihE3f2hE3ttt2ttt1hEEhE2h43hEiEEhEhE1tttt3f8f2hEh2hh2Ei2f6f6fff3ttt1h2f6f4Eh4ff4ttt2ttt2ttt2t4ttt3ff4';
solution25[2]='4f6f5t4t4f6f3t3f6f6f6f6f3hEhEh2h2i2h2t3t2h1h2h1h2i6f8f6h2hih4iEiEi4ihh3i4h3hEh1h6f6ihhi1i1ihi3hiihhh6f4i3hEhi3hii2ii2ii3i2h3hhEEiihE3iih3iii3f3iiiihih5tt2i3Eii2hhii3f4f3i3i4i4h2tt2iEi2i3hi5f6f3E2h2hih4iEEEiEii3i4ihEhEi2i3ih3hh4f4f3E1ih2hi6f8f4h3ii4hhhi4fffff4hi3ihEhEihh3ih3hhihE2tt2ih3ii6f6f3h3h2hih4i2EiEEii3hi2hEEEEhi4i4i4hiEE3f4iii4iihE4ff6ihih2hh3f4f4h3i2h2ihEhEEh3hi3ih6fff2h2h1ihiihEh4f5hh2ii4hE2EEhEhE3h2i4f6h2ih2ii2hhEh4f8f6Ehhi3f3h3hi6f3ii34E4hEhEhEh4iE1ihi4ihEE1iihEh6f6f8f6h3Eii4ih1h4ff4i6f5h3f3hEh3hE2ih1hEhhEEi3hEi4i2i4f6i4Eii6f8f4h2f4h4E2h1h3f4h1hEiihEhEE6f4i4hEi4f4EEh4f5t2i2EhEEhEh1h4f5f4f3t5f3t3f4tt5ff6f6f4';
solution25[3]='2E4ff6f3ttt1EE2t2EE4f4f4EhEh1EhEEEEEEEEiEiEEh1t2hE6f6iE5ttt4ff6f5EiEEhEEi2EhEhi1h3t3iEEhEhE4ff8ff5f4hEhiihhEh4ff4EhEiEEh3ff2h4f6ii2hE2iEEEEhE3E2hiE4f4EEhi3f6ff3EE3f4EhEh4i1hEEEEh2ttttttt3i4ff6Ehhii3t34f5tt2ttt1EhihEEhEh2i3t1hh1tt2ttt3ff6i4f2hEhEii4f46f4tt3f6f2Eh2ttt5f4EiihEEhEi2tt3h1EE4tttttttt3i6f26f3iEEh3iE2i4f2E3tt2iihEEhEEi2f4iiEhihEEEhEEiii4f4hEE3t4t4iE4ihE2f8f4iiiEEh6f4iEh2h2EhihEEEhEhii3tt5h2hiEhhhiEhi6fff7f4iiiEEhhh2iEhhh3E4ihEEEi2t2ii4f44hEiE2h2hEhihE2f4iEEiihEEhhE2tt5f6f4i3EE2iiE1ii4f3h4ff3tttttt2iEEh3iEi2iEEihEE3tttt2ttt4ff4h2t4i2t1i4f4h2ff4f6f3t3ff6f2h4t2t2EEh3tttt1hEE2ff4fff4hEEEEEE4ff4fff6f2EEEEE2ff6ff2E';
	
	
const sample36=new Array;
sample36[1]='3NN4NN4N6N2N4N3N2N2N2N4NN3N5N6N4N6N4NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN2N2NNN5NN8N2N2N2NN8NN3N2N1N2NN3NN6N5NNNN1NNNNNNN2NNNNNN3NN2N4N2N2NN1NNNNNN1NN3NNNNNNNN3N2N3NNNNNNNNNNNNNNNNN3NN3NN6NN6NN2NN1N2N4N2N1N1NN3NN4N5NNNNNNNNNNNNNNNNNNNNNNNN2N8N2NNNNNNNNN2N1NN3N2N2N4N6NN4N2NNNNNNNNNNNN2NNN3NNNN3N4NNNNNNNNNNNN2NNNNNN4N4N3NN4NN3N1NNNNN3NN4NN2NNN3NN3NN5NNNNNN2NNNNNNNN1NN1N2NNN1NN1NN2NN2NNNNN4N7NNN6NN6N4N66N4NNN1N3NNN8N4NNNNN3NNNNNNNN1NNNNNNN2N6N3N3NNN1NNNNNN2NNNNN5NNN4NN3N3N6NNNNNNNNN2NN5NNNNNNNNNNNNNNNNNNNNNNN5NNN3N2NNNNNNN4N1N3N1N5N8N4NN3NNN1NNN1N2N3N3NN2N4NNNNNNNNNNNNNNNNNN4NN2NNNNNNNNNNNNNNN4N4N8N4N6N2NN1N3NNNNNN3NN4N8N6N3NN5NN1NNNNNNNNNNNNNNNNNN2NNNNNNNNN2NNNN2NNNN6NN1N1N3NN2NN4N4N42NN2N2NNNNNNNNN4N4N2NN6N2N1NN1NNNN3NNNNN3NNN8N8N6NNNNN4NNNN5N8NN8N3N1NNNNNNNNNNNNNNNN3N6NNNNNNNNNNNNNNNNNN2N3NN2NN1NNN3NNNNNN4NN2NN8N6NN4NN5N4NNNNNN2NNN3NNN4NN3NN2NNNNNNNNNNNNNNNN41N2NNN2NNNNNNNNNNNNNN1N4N5NN2NN1NNNNNNNNNNNNNN3N6NN5N4NNNNNNNNNNNN2N6NN64N8N5N7N7NN6NN3NNN2N1N3N2NNNN2NNNN1NNNNNNNNNNNNNNNNNNNNNNNN1NN3N3NNNNNN3NNNN2N6N8NN8NNN4N6NN3N3NNNNNN2NN3NNNNN4NN2N1NNNNNNNNNNN2NNN3NNNNNNNNNNN2NNNNNNNN6NN8NNN4N4NNNNNN1N5N8N2NNNNNNN2NNN1NNNNN2NNNNNN4N2NNNNNNN3NN3N3NNNNNNNNNN2N6N1N3NN1NNNN3NNNN2NNNNNNN5NN2N2NN4NNNNNNNNNNNN4NNNN5NN8N4N6N5NNNNNNNNNNNN2NN3NN1NNNNNNNNNNNNNNNNN4NN4NNN3NNN6NNNNN3N3N3N5NN6NN4NNN4N4';
sample36[2]='NNNNNNNN2NN6NNNN4NN4N6N4NN6N5NN3NN2N4NNN6NN4N2NNNN4NN6NN2NNNNNNNN3NN2NN3NNNNNNNNNNN2NNNNNN1NNN2N3N5N4NNNNNNNNN2N5NNN2N2N3N6NN4N2N5NNNNN4N8NNNN2N6NN3NNNNNNNNNNNNNN4NNNNNNN3NNNN4NNN6NN2N2N4N3NN3N6NNN4N2NN2NN2NNNNNNNNNNNNNNNNNNNN4N4N4N4NNNNNNNNN2NN4N6N2NN6N4NNN3NN2NNNNNNNNN4NN8NN5N3NNNNNNN5NNNN1NN1NNNN2N4NNN4NN3N2NN6NN3NNNN1NN1NNNN3NNN3NN3NNN2NNNNNN2NNN3NN2N1NNNN2N4NNN2NNNNN4N8N8N3N3NNN3NNN2N2NN66NN4N1NNN5NNNNN2NNNNNNNNNNNNNNNNNNNNNNNN4NNNNN1N5N4N4NNNN4NN6N5NNNNN1NN4N3N4NNNNNNNNNNNNNNNNNN1NNNNN5N8NN4NN2NNNNNN2N4NN6N4NNN4N3NNNNNNNNNN1NN2NN5NN5NNN3NNNNNN2NNNNN4NN8N8N4N2NNNNNNNNNNNNNNNNNNNNNNN6N8N3NNNNNNNNNNNNNN4N2N2N2N2N5NNNN5NNNNNNN3NNN3NN6N3NN3NNN2NNNNNNN3N2NNN4N8N4NNN4NN2NNNNNNNNNNNNNNN4N5N4N2NNNNN2NNNNNN2NN6NN4NN2N6N5NNNNNNNNNNN4NN4N2NNNNNN4NN3NN4NNNNNNN3N3NNN6NN4NNNNNNN4N8N4NN4NNNN6NN6N4NNNNN3NN1NN5N4N6NNNNN4N6NNN4N6NNNNNNNNN3NNN3NNNN1NNNNNNN2NNNNN2NNN6N5NNN4NNNNN3NNN2NNN2N4N4NN5N8N8N8N5NNN2N2N2NNNNNN1NNN3NNNNNNNNNNNNNNNNNNNNNNNNNN6N6N4N6N2NNN3N4N5NN1NN6N8N54N6NNN2NNNNNNNNNNNNN3NNNNNNNNNNNNNNNNNN2NNNNNNN3N2NN3N6NNNN4NN4NN6NNN4N6NNNNN5NN3NNN5NN6NNNN4NNNN2NNNNNNNNNNNNN1NNNNNNNNNNNN3NNNN3N4NN8NN6N4NN1NNNNNNNN3N8N3NNNNNN4N4NNN1NNNNN4NN6N62N6NN6NNNNNN2NN2NNNNNN1NNN5N3NNN1NNNNNNNNNN3N8N5N4NN4NN5N8NN4NNNN1NNN3NNNNNNN2NNNNNNNNNNNNNNNNNNNN2NNN4N3NNN4N6N2NNNN4N6N6N4NNN6N4NN3NNN4NNNN2N3';
sample36[3]='NNNN4N4N3NN3NN2N4NNN6N6N5NNNNNN6NN2NNNNNNNNNNNNNNNNNNNNNNNNNNN2NN1NNNNNN4N5N3NN1NNN4N3N4N2N2NN4NNNNN4NN8N6N4NNNNNNNNNNNNNNNN1NNNNNNNNNNNNNNNNNNN5N8NN4NNNNN4N4N4NNNN2NNN5N5NN3N8N7N5NNNNNNNN5N4N1NNNN1N2NN5NNNNNNNNNNN1N3NNNNNNNNNN1NNN4NN4N2NNN6N8N6NN3NNNNNN4N4NNN3NNNNNNNNNNNNNNNNNNNN1NNN2NN4NNNN3NNNNNNNNN4N2NNNN2N6N7N6NN1NNNNN1NN3NN2NNNNN3NN4N6NNNNNNNNNNNNNNNNNNN2NNNNNNNN3NNN2NNNN3NN2NNNNNNNNNN2NNNN1N3NNNNNNNN1NNN2NNNNNNNNN4NN2NNN26N8N2NNN3NNNNNN4NNN4NNNN8N4NN3NN4N2NNNNNNNNNNN1NN3NN1NNNNNNNNNNNNN1NNNN23N4NNNN2NNNNNNN4NNNNN2NN6N3NNNN2NN3NNNNNN1NN6NN5NNNN2NN8NN4NNNNN3NNN2NNN4N8N4N5NNN2NN2N4NNNNNNNNNNNNNNNNN1N2NNNNNNNNNNN2NN2NNNN3NNNN1N4N5NN6NN5N2NNN3N5N3NNNNNNNNNNNNN3NN4NNNNNNN1NNNNNNNNNNNN6NN2NNNNN3NNNN2NNN3NNNNN2N3N4NNN1NNNNNNNN3NNNN3NNNN4NNNNN2NNNNN2NN3NN2NNN3NNNNNNNNNNNNNN2N3N4NN5N3NNNNNN2N2NNN1NNNN3N2NN2NNNNNNNNNNNNN2N1NNNNNNN3NNNNNNNNN2NNNN3NN3NN2N6N3N6NN5N6N3NN3NNN2NNNNNNN2NNN2NNNNNNNNNNNNNNNNNNNNNNNNNNNN6N6NNNNNNNN2NN2NNNN2NNN2NN4N6N4NN2NNNNN4N6N4NNNNN3NNNNNNN4NN2NNNNNNNNNNNNNNNNNNNNNNNNNNNNN2NNNN2N5N3NNN2NN1N2N5NN3NN3NN5N4N2N3N3N4NNNNNNN2NNNNNNNNNNNN2NNNNN2NNNNN3NNNNNNNNNNNNNNN2NN1NNN3NNNNNNN2N2NNN4N4N5NNNN2N2NNNNNNN4N2NNNN1NNNN1NNN2NNNNNN4NNN4N3NN3NNNNNN4NN3N1NN2NN3NNNNNNNNNN2NNNNN2NNN2NNNNNNNNN1NNN2N1N4N4N4NNNNNNNNNNN1NN4N4N4N6NNN4NNN3N3NNN3NN6N3NNNNNN5NN5NNN6NNNN3NN3N2';
const solution36=new Array;
solution36[1]='3ff4EE4f6f2E4f3t2t2E2f4ff3t5f6f4f6f4iEEhEEhEhEEEhEEEEEiEEEEEEEEhEh2t2hEh5ff8f2h2h2ff8ff3t2i1t2tt3tt6f5iEih1hhEEhEE2hhEEEh3ff2i4t2t2Ei1EiEiiE1hi3hEEhEEEh3t2t3iEEEihEEEiEiiEiEi3tt3ii6ff6ff2hE1t2t4t2E1h1tt3Ei4f5EiiEEEiihEEEEEEhEEEEEiEi2f8f2EiEiiEhEi2t1Ei3h2t2t4f6ff4t2iEiEEhEEEiEi2EhE3ffff3h4iEEEiEEEEiEi2EiEEhE4f4E3iE4ff3t1EEhhi3tt4tt2EiE3iE3ff5EhEiEh2tttttttt1hh1h2EiE1iE1Eh2tt2EiEhE4f7fff6ff6f4f66f4hEi1i3fff8f4EiEiE3EiEiEEEh1EhEEEhh2f6f3i3ttt1hEhEiE2EiEiE5fff4iE3E3f6hEEEEEiiE2tt5EhEiEiEiEiEhEEEEiEiEiEh5fff3t2iEiEEhE4E1E3E1E5f8f4tt3EiE1Ehi1t2t3E3Ei2E4EhEEEhEEEhEhEiEEiE4tt2hiEEEEhEhEihEhE4f4f8f4f6E2Ei1t3EhEEih3tt4f8f6f3hE5tt1EEhEEEhEEEiEEiEhEE2hiEEiEhEE2EhEh2tttt6tt1h1t3iE2iE4f4i42EE2E2EEhEhEhiE4f4h2ff6f2h1Eh1EEEh3hiEEi3fff8f8f6iEhEh4tttt5f8ff8f3t1hhhiEEiiEEEhEhEh3f6EhiEEEEhEhEEhEEEEh2h3tt2iE1EhE3EhEEhE4iE2ff8f6EE4ff5f4EhiEEE2EiE3EiE4EE3Eh2EEEEhEhEEEEEiEEE41E2EiE2EiEiEhEEiEhiEE1t4t5ff2EE1EEEhEEhEiEiEiE3f6ff5f4iEEEEEEEEEEE2f6ff64f8f5f7f7ff6ff3ttt2E1t3E2tttt2EEhE1hhEhEEEhEhEEhEEEEEEEEEEh1iE3t3iEEhEi3hEhE2f6f8ff8fff4f6ff3t3iiEhEh2tt3EiihE4tt2t1hEEhEEEEEhE2ttt3iEhEhEEEEEi2hEiEEEEE6ff8fff4f4EiEEEi1E5f8f2EEEiihE2ttt1EhEEh2tttttt4E2EiEEiEh3tt3f3ihEEEEEEEh2f6i1t3tt1hEhE3EEiE2hEEEEEi5tt2E2ff4EEhiEEiEEEhE4EhEE5ff8f4f6f5hEEiEEEEEEEh2tt3tt1hEhEhEEhEEhEEEhEh4ff4ttt3fff6fffff3t3E3t5ff6ff4EEE4f4';
solution36[2]='EEEEEEEE2ff6ffff4ff4f6f4ff6f5tt3ff2E4fff6ff4f2EhEE4ff6ff2hEEEEhEh3tt2tt3hEEEhEEEEEE2EEhEEh1EEh2f3t5f4hEEEEEhhE2f5ttt2t2t3f6ff4i2f5ttttt4f8ffff2h6ff3tttttttttttttt4ttttttt3iEhE4fff6hE2E2t4t3tt3f6fff4i2EE2EE2hiEhEhEEEhhEhEiEhEiE4f4h4f4hihEEhEEh2iE4f6f2Eh6f4EiE3Ei2hEhhhEhhi4ff8ff5t3ttttttt5hEEE1Ei1ihhE2h4Ehh4tt3h2ff6ff3tttt1hh1tttt3iih3tt3hEh2hEEhhE2EhE3tt2t1EhhE2f4Eii2hEEEE4f8f8f3h3EhE3EhE2E2ff66ff4h1iii5ttttt2hEhEihiEhEiEhEhEEEEhhEEh4iiiih1t5f4i4EhEi4iE6f5EhEhE1tt4h3f4hiiiihEEhEhihEhEih1EhEhE5f8ff4Ei2iEEhii2i4ff6f4ihE4E3hEEhEhEiEh1Eh2iE5ff5iii3tttttt2hEhEh4ff8f8f4E2iEhhiEhEEiiiiiEEEEEEEhE6f8f3EhEhEiEEiEhhiE4f2i2i2i2f5tttt5EhEhEiE3EhE3ff6t3hi3ttt2iiiiEEh3f2EhE4f8f4EiE4EE2EhEEhihEEEEiiii4f5i4f2hEEEh2iEiEhE2hE6ff4ih2f6f5iiihEiihEEh4ff4h2EiEhEh4Eh3tt4hEEhEhi3i3Eii6ff4hEEEhiE4f8f4hENhEEh6ff6f4ihiiE3ih1tt5f4f6iEiEh4f6Ehh4f6hEEEEEihi3Ehi3tttt1EEhiEiE2hEhEh2hEh6f5ttt4hihEh3ttt2ttt2h4f4tt5f8f8f8f5hEh2t2h2ihEhiE1ttt3EihiEEEEEEhEhEhEihEhiEihEi6f6i4f6f2hEi3i4f5tt1hE6f8f54f6iEi2EihEhihEhEEhE3iihEhEEEhEhEhEhEEh2EiEEihE3i2Eh3f6Ehii4Eh4ff6EhE4f6EEhiE5ff3hEi5ff6iEhE4iihE2hEEhEhEEEhEEh1EhEEEhEihEEh3EhEh3i4ff8ff6t4tt1hEEhEEhE3f8f3hEEhhE4f4hiE1EhEEi4ff6f62E6ff6EiEhEE2EE2hEEEEh1EiE5t3ihE1hEhhEhEEhE3f8f5t4tt4tt5f8ff4EhEh1hEi3EhhEhEE2EEEhEhEhEEEEEhEhEEiE2EhE4f3iEh4f6f2EEEE4f6f6f4fff6f4EE3fff4EEEE2t3';
solution36[3]='EEEE4f4t3tt3tt2t4fff6f6f5ffffff6ff2EEEEEhEiEiEEiEEEEiEEEhEhEiE2tt1EhEEEE4f5t3Ei1iEE4t3f4i2t2hE4EiEiE4ff8f6f4hEhEEEiiiEEhEEEh1iEihEhEiEiEhEEhEhEh5f8ff4iiiEE4f4t4EiEi2EhE5f5Eh3f8f7f5iEhEEhii5f4t1iEiE1E2tt5EhEhEhiEhEi1i3EhEEhiihEi1EiE4tt4t2EhE6f8f6iE3EiiihE4f4hii3EiiEiEhEEhEiEhEhEhEh1EiE2ii4EEEh3iiiEiiEiE4f2hEiE2E6f7f6EE1Eiiih1tt3ii2iEiiE3tt4f6EiEEEhEiEhEEEEiiihE2EEiiiiEi3EiE2iEhE3ff2hEiEhEEEEi2ihEh1t3iiiEihEi1hiE2EEEEEhEiE4ff2Eii26f8f2iii3EihEii4iEE4ffff8f4EE3ff4i2ihEhEEiiihE1hE3ih1EEhEEEEhEiEEi1Ehii23E4EEii2hEEhEhi4EEEhE2ff6f3EEii2hi3iiEhEE1ii6ff5Ehih2ff8ff4ttttt3iih2ihi4f8f4f5ihE2iE2i4EEEhEEiEEEEEhiihE1h2iEhEEEhihEh2tt2hEEE3EEiE1t4f5ii6ff5i2EhE3f5i3EhEEEEhEEEiEE3ff4iEiiihE1iiiEhEiEiiiE6ff2EhEEE3ffff2hiE3iihEi2i3t4EiE1iiEhEEEE3tttt3ffff4iEhii2Eiiii2iE3tt2iEh3tttttttttttttt2E3i4ff5i3ihiEiE2E2Ehh1tttt3t2EE2EEEEEiiiEEhih2h1EiEhEiE3hEEEEEiEi2EhEE3tt3ii2f6i3i6ff5f6f3Ei3ttt2EiEihEh2EhE2iiiEEhiiihEEEEEEEEiEEEEiEiEi6f6hEhEhiii2Eh2iihE2ttt2tt4f6f4iE2EihEh4f6f4iiihE3iiihEiE4ff2EEEhEhiEiEihEhEEEEEiiihEiiiih2iEhE2t5f3hEh2Ei1i2E5tt3tt3ii5f4i2i3h3E4EiEhEih2hiEiiiEEhEEi2Eiiii2iiiii3hEhEiEhEihhhiEi2iE1hEE3hEiiiih2i2iii4E4f5EhEi2h2iEiiiEi4E2hhEi1iihi1iii2hEEEhE4EiE4f3Ei3iEihEh4hE3E1ih2Ei3iihEEEhEhE2ttttt2hiE2hEhhhEhEE1hiE2h1i4f4f4EhEEEEEEEEh1Ei4f4h4f6fff4iEi3t3ttt3ff6f3tttttt5ff5fff6ffff3tt3t2';
	
