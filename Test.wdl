version 1.0

workflow Test {
    input {
        String test
    }

    call RunTest {
        input:
            test = test
    }
}

task RunTest {
    input {
        String test
    }

    command <<<
        echo "----"
        pwd
        echo "----"
        ls -lha
        echo "----"
    >>>

    runtime {
        cpu: 1
        memory: "2 GiB"
        docker: "python:latest"
    }
}
