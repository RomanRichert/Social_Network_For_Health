package com.healyourself.ok_treatments.service.util;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import lombok.experimental.UtilityClass;

import java.util.List;
import java.util.Map;

@UtilityClass
public class HealthScoreCalculator {

    public static double calculateHealthScore(StoryRequestDTO story) {
        Map<Integer, Integer> sf36Answers = story.getSf36Answers();

        List<Integer> pf = List.of(
                sf36Answers.get(3),
                sf36Answers.get(4),
                sf36Answers.get(5),
                sf36Answers.get(6),
                sf36Answers.get(7),
                sf36Answers.get(8),
                sf36Answers.get(9),
                sf36Answers.get(10),
                sf36Answers.get(11),
                sf36Answers.get(12)
        );

        List<Integer> rp = List.of(
                sf36Answers.get(13),
                sf36Answers.get(14),
                sf36Answers.get(15),
                sf36Answers.get(16)
        );

        List<Integer> bp = List.of(
                sf36Answers.get(21),
                sf36Answers.get(22)
        );

        List<Integer> gh = List.of(
                sf36Answers.get(1),
                sf36Answers.get(33),
                sf36Answers.get(34),
                sf36Answers.get(35),
                sf36Answers.get(36)
        );

        List<Integer> vt = List.of(
                sf36Answers.get(23),
                sf36Answers.get(27),
                sf36Answers.get(29),
                sf36Answers.get(31)
        );

        List<Integer> sf = List.of(
                sf36Answers.get(20),
                sf36Answers.get(32)
        );

        List<Integer> re = List.of(
                sf36Answers.get(17),
                sf36Answers.get(18),
                sf36Answers.get(19)
        );

        List<Integer> mh = List.of(
                sf36Answers.get(24),
                sf36Answers.get(25),
                sf36Answers.get(26),
                sf36Answers.get(28),
                sf36Answers.get(30)
        );

        return (calculateMentalHealth(pf, rp, bp, gh, vt, sf, re, mh) + calculatePhysicalHealth(pf, rp, bp, gh, vt, sf, re, mh)) / 2;
    }

    private static double calculateMentalHealth(List<Integer> pf, List<Integer> rp, List<Integer> bp, List<Integer> gh, List<Integer> vt, List<Integer> sf, List<Integer> re, List<Integer> mh) {
        return (pfz(pf) * -0.22999) + (rpz(rp) * -0.12329) + (bpz(bp) * -0.09731) + (getSocialFunctioning(sf) * 0.26876) + (mhz(mh)
                * 0.48581) + (rez(re) * 0.43407) + (vtz(vt) * 0.23534) + (ghz(gh) * -0.01571);
    }

    private static double calculatePhysicalHealth(List<Integer> pf, List<Integer> rp, List<Integer> bp, List<Integer> gh, List<Integer> vt, List<Integer> sf, List<Integer> re, List<Integer> mh) {
        return (((pfz(pf) * 0.42402) + (rpz(rp) * 0.35119) + (bpz(bp) * 0.31754) + (sfz(sf) * -0.00753) + (mhz(mh)
                * -0.22069) + (rez(re) * -0.19206) + (vtz(vt) * 0.02877) + (ghz(gh) * 0.24954)) * 10) + 50;
    }

    private static double ghz(List<Integer> gh) {
        double ghSum;
        double gh1 = 0.0;
        double gh11A = gh.get(1);
        double gh11B = 0.0;
        double gh11V = gh.get(3);
        double gh11G = 0.0;

        switch (gh.get(0)) {
            case 1 -> gh1 = 5.0;
            case 2 -> gh1 = 4.4;
            case 3 -> gh1 = 3.4;
            case 4 -> gh1 = 2.0;
            case 5 -> gh1 = 1.0;
        }

        switch (gh.get(2)) {
            case 1 -> gh11B = 5.0;
            case 2 -> gh11B = 4.0;
            case 3 -> gh11B = 3.0;
            case 4 -> gh11B = 2.0;
            case 5 -> gh11B = 1.0;
        }

        switch (gh.get(4)) {
            case 1 -> gh11G = 5.0;
            case 2 -> gh11G = 4.0;
            case 3 -> gh11G = 3.0;
            case 4 -> gh11G = 2.0;
            case 5 -> gh11G = 1.0;
        }

        ghSum = (((gh1 + gh11A + gh11B + gh11V + gh11G) - 5) / 20) * 100;

        return (ghSum - 72.21316) / 20.16964;
    }

    private static double vtz(List<Integer> vt) {
        double vtSum;
        double vt9A = 0.0;
        double vt9D = 0.0;
        double vt9ZH = vt.get(2);
        double vt9I = vt.get(3);

        switch (vt.get(0)) {
            case 1 -> vt9A = 6.0;
            case 2 -> vt9A = 5.0;
            case 3 -> vt9A = 4.0;
            case 4 -> vt9A = 3.0;
            case 5 -> vt9A = 2.0;
            case 6 -> vt9A = 1.0;
        }

        switch (vt.get(1)) {
            case 1 -> vt9D = 6.0;
            case 2 -> vt9D = 5.0;
            case 3 -> vt9D = 4.0;
            case 4 -> vt9D = 3.0;
            case 5 -> vt9D = 2.0;
            case 6 -> vt9D = 1.0;
        }

        vtSum = (((vt9A + vt9D + vt9ZH + vt9I) - 4) / 20) * 100;

        return (vtSum - 61.05453) / 20.86942;
    }

    private static double rez(List<Integer> re) {
        double reSum;
        double re5A = re.get(0);
        double re5B = re.get(1);
        double re5V = re.get(2);

        reSum = (((re5A + re5B + re5V) - 3) / 3) * 100;

        return (reSum - 81.29467) / 33.02717;
    }

    private static double mhz(List<Integer> mh) {
        double mhSum;
        double mh9B = mh.get(0);
        double mh9V = mh.get(1);
        double mh9G = 0.0;
        double mh9E = mh.get(3);
        double mh9Z = 0.0;

        switch (mh.get(2)) {
            case 1 -> mh9G = 6.0;
            case 2 -> mh9G = 5.0;
            case 3 -> mh9G = 4.0;
            case 4 -> mh9G = 3.0;
            case 5 -> mh9G = 2.0;
            case 6 -> mh9G = 1.0;
        }

        switch (mh.get(4)) {
            case 1 -> mh9Z = 6.0;
            case 2 -> mh9Z = 5.0;
            case 3 -> mh9Z = 4.0;
            case 4 -> mh9Z = 3.0;
            case 5 -> mh9Z = 2.0;
            case 6 -> mh9Z = 1.0;
        }

        mhSum = (((mh9B + mh9V + mh9G + mh9E + mh9Z) - 5) / 25) * 100;

        return (mhSum - 74.84212) / 18.01189;
    }

    private static double sfz(List<Integer> sf) {
        return (getSocialFunctioning(sf) - 83.59753) / 22.37642;
    }

    private static double getSocialFunctioning(List<Integer> sf) {
        double sf6 = 0.0;
        double sf10 = sf.get(1);

        switch (sf.get(0)) {
            case 1 -> sf6 = 5.0;
            case 2 -> sf6 = 4.0;
            case 3 -> sf6 = 3.0;
            case 4 -> sf6 = 2.0;
            case 5 -> sf6 = 1.0;
        }

        return ((sf10 + sf6 - 2) / 8) * 100;
    }

    private static double bpz(List<Integer> bp) {
        double bpSum;
        double bp7 = 0.0;
        double bp8 = 0.0;

        switch (bp.get(0)) {
            case 1 -> bp7 = 6.0;
            case 2 -> bp7 = 5.4;
            case 3 -> bp7 = 4.2;
            case 4 -> bp7 = 3.1;
            case 5 -> bp7 = 2.2;
            case 6 -> bp7 = 1.0;
        }

        switch (bp.get(1)) {
            case 1 -> {
                if (bp.get(0) == 1) bp8 = 6.0;
                else if (bp.get(0) > 1) bp8 = 5.0;
            }
            case 2 -> bp8 = 4.0;
            case 3 -> bp8 = 3.0;
            case 4 -> bp8 = 2.0;
            case 5 -> bp8 = 1.0;
        }

        if (bp.get(0) == 0) {
            switch (bp.get(1)) {
                case 1 -> bp8 = 6.0;
                case 2 -> bp8 = 4.75;
                case 3 -> bp8 = 3.5;
                case 4 -> bp8 = 2.25;
                case 5 -> bp8 = 1.0;
            }
            bp7 = bp8;
        }

        if (bp.get(1) == 0) bp8 = bp7;

        bpSum = (((bp7 + bp8) - 2) / 10) * 100;

        return (bpSum - 75.49196) / 23.558790;
    }

    private static double pfz(List<Integer> pf) {
        double pfSum = 0.0;

        for (Integer i : pf) {
            pfSum += i;
        }
        double result = ((pfSum - 10) / 20) * 100;

        return (result - 84.52404) / 22.89490;
    }

    private static double rpz(List<Integer> rp) {
        double rpSum = 0.0;

        for (Integer i : rp) {
            rpSum += i;
        }

        double result = ((rpSum - 4) / 4) * 100;

        return (result - 81.19907) / 33.797290;
    }
}