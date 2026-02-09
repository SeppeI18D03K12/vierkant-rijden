for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 80)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(2000)
}
